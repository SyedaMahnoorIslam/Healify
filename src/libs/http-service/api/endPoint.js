import { postData } from "../methods";

export const ApiEndPoints = {
  login: async (body) => await postData("/auth/login", body),
  signup: async (params) => await postData("/auth/register", params),
  forgetPassword: async (body) => await postData("/auth/forgot-password", body),
  resetPassword: async (params) => await postData("/auth/reset-password", params),
  otp: async (params) => await postData("/auth/verify-otp", params),
};
