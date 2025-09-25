import axios from '../config/axios.config';

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "", 
    },
  };
};

// -------------------- POST --------------------
export const postData = async (url, data, params = {}) => {
  try {
    const response = await axios.post(url, data, { ...getHeaders(), params });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

// -------------------- GET --------------------
export const getData = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { ...getHeaders(), params });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

// -------------------- PUT --------------------
export const putData = async (url, data, params = {}) => {
  try {
    const response = await axios.put(url, data, { ...getHeaders(), params });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

// -------------------- PATCH --------------------
export const patchData = async (url, data, params = {}) => {
  try {
    const response = await axios.patch(url, data, { ...getHeaders(), params });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

// -------------------- DELETE --------------------
export const deleteData = async (url, params = {}) => {
  try {
    const response = await axios.delete(url, { ...getHeaders(), params });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

// -------------------- ERROR HANDLER --------------------
export const errorHandler = (error) => {
  let message = "An unknown error occurred.";
  if (error.response) {
    const res = error.response.data;

    if (error.response.status === 401) {
      // alert("Session expired. Please log in again.");
    } else {
      // alert("Something went wrong. Please try again later.");
    }
    if (res) {
      message = res.message || res.metadata?.message || message;
    } else {
      message = JSON.stringify(res);
    }
  } else if (error?.message) {
    message = error.message;
  }
  return { error: message };
};
