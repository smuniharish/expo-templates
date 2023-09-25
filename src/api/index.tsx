import { POST_LOGIN_API } from './apiConstants';
import {
  getAPIParamsHelper,
  getAPIHelper,
  postAPIParamsHelper,
  postAPIHelper,
  putAPIHelper,
  postAPIFormHelper,
} from './apiHelpers';

// Initialize the api related functions with the help of apiHelpers

// Authenticate
const postLogin = async (data: any) => {
  try {
    const result = await postAPIHelper(POST_LOGIN_API, data);
    return result;
  } catch (error) {
    throw error;
  }
};



export {
  postLogin,
};
