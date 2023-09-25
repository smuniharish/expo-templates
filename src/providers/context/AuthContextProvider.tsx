import { postRefreshToken } from '@/api';
import { errorLog, infoLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { createContext, useContext, useEffect, useState } from '@/imports';
import { useAppDispatch, useAppSelector } from '@/store';
import { clearRefreshToken, updateRefreshToken } from '@/store/slices/persistSlice';
interface userInterface {
  id: number;
  firstName: string;
  fullName: string;
  vendorId: number;
  roleId: number;
  languagePreference: string;
  usertype: string;
}
type AuthContextType = {
  accessToken: string | null;
  refreshToken: string | null;
  userDetails: userInterface | null;
  setAuthTokens: (accessToken: string, refreshToken: string) => void;
  setUserDetails: (value: userInterface) => void;
  clearAuthContext: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
const AuthContextProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<userInterface | null>(null);
  const dispatch = useAppDispatch();
  const storedRefreshToken = useAppSelector((state) => state.auth.refreshToken);

  infoLog('AuthContextProvider', storedRefreshToken, refreshToken, accessToken);

  useEffect(() => {
    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  }, []);
  const clearAuthContext = () => {
    setAccessToken(null);
    setUserDetails(null);
    setRefreshToken(null);
    dispatch(clearRefreshToken());
  };
  useEffect(() => {
    const attemptLogin = async () => {
      if (storedRefreshToken) {
        try {
          const refreshResponse = await postRefreshToken({ refreshToken: storedRefreshToken });
          if (refreshResponse.status === 401) {
            clearAuthContext();
          }
        } catch (err) {
          errorLog(stringifyValue(err));
          clearAuthContext();
        }
      }
    };
    attemptLogin();
  }, []);
  const setAuthTokens = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    dispatch(updateRefreshToken({ refreshToken: newRefreshToken }));
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, userDetails, setAuthTokens, setUserDetails, clearAuthContext }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
