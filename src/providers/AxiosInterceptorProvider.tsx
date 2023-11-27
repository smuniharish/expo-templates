import { useAuth } from './context/AuthContextProvider';

import { POST_REFRESH_TOKEN } from '@/api/apiConstants';
import apiInstance from '@/api/apiInstance';
import { infoLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { FC } from '@/imports';

const AxiosInterceptorProvider: FC<any> = (props: any) => {
  const authContext = useAuth();
  const { accessToken, refreshToken, userDetails } = authContext;
  infoLog('AxiosInterceptorProvider', accessToken, refreshToken, stringifyValue(userDetails));
  apiInstance.interceptors.request.use((config: any) => {
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  });

  apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const { refreshToken, clearAuthContext, setAuthTokens } = authContext;

      if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Make a request to refresh the access token using the refresh token
          const response = await apiInstance.post(POST_REFRESH_TOKEN, {
            refreshToken,
          });

          const newAccessToken = response.data.accessToken;
          setAuthTokens(newAccessToken, refreshToken);

          // Retry the original request with the new access token
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return apiInstance(originalRequest);
        } catch (refreshError) {
          // Refresh token has also expired or refresh failed
          infoLog(refreshError);
          clearAuthContext();
          // Redirect to login or handle the logout flow
        }
      }

      return Promise.reject(error);
    }
  );
  return props.children;
};

export default AxiosInterceptorProvider;
