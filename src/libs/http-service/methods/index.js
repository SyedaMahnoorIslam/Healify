import axios from '../config/axios.config';
export const postData = async (url, data, params = {}) => {
    try {
      const response = await axios.post(url, data, params);
      return response.data;
    } catch (error) {
      return errorHandler(error);
      // alert("login successfull")
    }
  };
  export const getData = async (url, params = {}) => {
    try {
      const response = await axios.get(url, { params: { ...params } });
      return response.data;
    } catch (error) {
      console.log(error);
      // return errorHandler(error);
    }
  };
  export const putData = async (url, data, params = {}) => {
    try {
      const response = await axios.put(url, data, { params });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  export const patchData = async (url, data, params = {}) => {
    try {
      // const headers = getHeaders();
      const response = await axios.patch(url, data, { params });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  export const deleteData = async (url, params = {}) => {
    try {
      const response = await axios.delete(url, { params }); 
      
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  export const errorHandler = (error) => {
    let message = "An unknown error occurred.";
    if (error.response) {
      const res = error.response.data;
  
      if (error.response.status === 401) {
        // alert("Session expired. Please log in again.");
        // errorToaster(warningMessages.sessionExpired);
      } else {
        // alert("Something went wrong. Please try again later.");
        // errorToaster(errorMessages.somethingWentWrong);
      }
      if (res) {
        message = res.message || res.metadata?.message || message;
      } else {
        message = JSON.stringify(res);
      }
    } else if (error?.message) {
      message = error.message;
      // alert(message);
      // errorToaster(message);
    }
    return { error: message };
  };