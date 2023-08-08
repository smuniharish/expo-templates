import { axios } from "@/imports";

const apiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: parseInt(process.env.EXPO_PUBLIC_API_URL_TIMEOUT || "10000") // timeout for api calls
});
// Mention the common key value pairs for all headers for api calls
const globalConfig = { "Content-Type": "application/json" };

const getAuthorizationTokenKV = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};

// Don't change helper functions (until if really needed !!!)
const getAPIWithoutTokenHelper = async (api: string) => {
  const config = {
    headers: {
      ...globalConfig,
    },
  };
  try {
    const response = await apiInstance.get(api, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const getAPIWithTokenHelper = async (api: string, token: string) => {
  const config = {
    headers: {
      ...globalConfig,
      ...getAuthorizationTokenKV(token),
    },
  };
  try {
    const response = await apiInstance.get(api, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const postAPIWithoutTokenHelper = async (api: string, data: any) => {
  const config = {
    headers: {
      ...globalConfig,
    },
  };
  try {
    const response = await apiInstance.post(api, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const postAPIWithTokenHelper = async (
  api: string,
  data: any,
  token: string
) => {
  const config = {
    headers: {
      ...globalConfig,
      ...getAuthorizationTokenKV(token),
    },
  };
  try {
    const response = await apiInstance.post(api, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const putAPIWithoutTokenHelper = async (api: string, data: any) => {
  const config = {
    headers: {
      ...globalConfig,
    },
  };
  try {
    const response = await apiInstance.put(api, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const putAPIWithTokenHelper = async (
  api: string,
  data: string,
  token: string
) => {
  const config = {
    headers: {
      ...globalConfig,
      ...getAuthorizationTokenKV(token),
    },
  };
  try {
    const response = await apiInstance.put(api, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const deleteAPIWithoutTokenHelper = async (api: string) => {
  const config = {
    headers: {
      ...globalConfig,
    },
  };
  try {
    const response = await apiInstance.delete(api, config);
    return response;
  } catch (error) {
    throw error;
  }
};
const deleteAPIWithTokenHelper = async (api: string, token: string) => {
  const config = {
    headers: {
      ...globalConfig,
      ...getAuthorizationTokenKV(token),
    },
  };
  try {
    const response = await apiInstance.delete(api, config);
    return response;
  } catch (error) {
    throw error;
  }
};
export {
  getAPIWithoutTokenHelper,
  getAPIWithTokenHelper,
  postAPIWithoutTokenHelper,
  postAPIWithTokenHelper,
  putAPIWithoutTokenHelper,
  putAPIWithTokenHelper,
  deleteAPIWithoutTokenHelper,
  deleteAPIWithTokenHelper,
};
