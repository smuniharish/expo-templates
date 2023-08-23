import { axios } from '@/imports';

const apiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: parseInt(process.env.EXPO_PUBLIC_API_URL_TIMEOUT || '10000', 10), // timeout for api calls
});

const globalConfig = { 'Content-Type': 'application/json' };

const getAuthorizationTokenKV = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};

const createApiConfig = (token: string, params?: any) => {
  const config = {
    headers: {
      ...globalConfig,
      ...getAuthorizationTokenKV(token),
    },
    params,
  };
  return config;
};

const getAPIWithoutTokenHelper = async (api: string) => {
  try {
    const response = await apiInstance.get(api, createApiConfig(''));
    return response;
  } catch (error) {
    throw error;
  }
};

const getAPIWithTokenHelper = async (api: string, token: string) => {
  try {
    const response = await apiInstance.get(api, createApiConfig(token));
    return response;
  } catch (error) {
    throw error;
  }
};

const getAPIWithTokenAndParamsHelper = async (api: string, token: string, params: any) => {
  try {
    const response = await apiInstance.get(api, createApiConfig(token, params));
    return response;
  } catch (error) {
    throw error;
  }
};

const postAPIWithoutTokenHelper = async (api: string, data: any) => {
  try {
    const response = await apiInstance.post(api, data, createApiConfig(''));
    return response;
  } catch (error) {
    throw error;
  }
};

const postAPIWithTokenHelper = async (api: string, data: any, token: string) => {
  try {
    const response = await apiInstance.post(api, data, createApiConfig(token));
    return response;
  } catch (error) {
    throw error;
  }
};

const postAPIWithTokenAndParamsHelper = async (api: string, data: any, params: any, token: string) => {
  try {
    const response = await apiInstance.post(api, data, createApiConfig(token, params));
    return response;
  } catch (error) {
    throw error;
  }
};

const putAPIWithoutTokenHelper = async (api: string, data: any) => {
  try {
    const response = await apiInstance.put(api, data, createApiConfig(''));
    return response;
  } catch (error) {
    throw error;
  }
};

const putAPIWithTokenHelper = async (api: string, data: string, token: string) => {
  try {
    const response = await apiInstance.put(api, data, createApiConfig(token));
    return response;
  } catch (error) {
    throw error;
  }
};

const putAPIWithTokenAndParamsHelper = async (api: string, data: string, token: string, params: any) => {
  try {
    const response = await apiInstance.put(api, data, createApiConfig(token, params));
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteAPIWithoutTokenHelper = async (api: string) => {
  try {
    const response = await apiInstance.delete(api, createApiConfig(''));
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteAPIWithTokenHelper = async (api: string, token: string) => {
  try {
    const response = await apiInstance.delete(api, createApiConfig(token));
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteAPIWithTokenAndParamsHelper = async (api: string, token: string, params: any) => {
  try {
    const response = await apiInstance.delete(api, createApiConfig(token, params));
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getAPIWithoutTokenHelper,
  getAPIWithTokenHelper,
  getAPIWithTokenAndParamsHelper,
  postAPIWithoutTokenHelper,
  postAPIWithTokenHelper,
  postAPIWithTokenAndParamsHelper,
  putAPIWithoutTokenHelper,
  putAPIWithTokenHelper,
  putAPIWithTokenAndParamsHelper,
  deleteAPIWithoutTokenHelper,
  deleteAPIWithTokenHelper,
  deleteAPIWithTokenAndParamsHelper,
};
