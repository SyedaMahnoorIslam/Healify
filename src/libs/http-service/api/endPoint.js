import { deleteData, getData, patchData, postData, putData } from "../methods";

export const ApiEndPoints = {
  login: async (body) => await postData("/auth/login", body),
  signup: async (params) => await postData("/auth/register", params),
  forgetPassword: async (body) => await postData("/auth/forgot-password", body),
  resetPassword: async (params) => await postData("/auth/reset-password", params),
  otp: async (body) => await postData("/auth/handle-otp", body),
  google: async (body) => await getData("/auth/google", body),
  // ---------------Admin Panel----------------
  deliveryAgentRegister: async (params) => await postData("/admin/users",params),
  getCustomers:async (body)=> await getData('/admin/customers',body),
  getDeliveryAgent:async (body)=> await getData('/admin/delivery-agents',body),
  dashboardStats:async (body)=> await getData('/admin/dashboard-stats',body),
  getMedicines:async (body)=> await getData('/medicines',body),
  addMedicines: async (params) => await postData("/medicines",params),
  deleteMedicine: async (id, body) => await deleteData(`/medicines/${id}`,body),
  editMedicine: async (id, body) => await patchData(`/medicines/${id}`, body),
  


};
