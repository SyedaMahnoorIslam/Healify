import { deleteData, getData, patchData, postData, } from "../methods";
const BASE_URL = process.env.REACT_APP_API_URL;

export const ApiEndPoints = {
  // ---------------- Authentication ----------------
  login: async (body) => await postData("/api/auth/login", body),
  signup: async (params) => await postData("/api/auth/register", params),
  forgetPassword: async (body) => await postData("/api/auth/forgot-password", body),
  resetPassword: async (params) => await postData("/api/auth/reset-password", params),
  otp: async (body) => await postData("/api/auth/handle-otp", body),
  googleLogin : async (body) => await postData("/api/auth/google/verify", body),
  // ----------------- Profile --------------------
  getProfile: async (body) => await getData('/api/user/profile', body),
  updateProfile: async (body) => await patchData('/api/user/profile', body),
  // ----------------- Admin Panel -----------------
  deliveryAgentRegister: async (params) => await postData("/api/admin/users", params),
  getCustomers: async (body) => await getData('/api/admin/customers', body),
  getDeliveryAgent: async (body) => await getData('/api/admin/delivery-agents', body),
  dashboardStats: async (body) => await getData('/api/admin/dashboard-stats', body),
  getMedicines: async (pages, body) => await getData(`/api/medicines?page=${pages}`, body),
  addMedicines: async (params) => await postData("/api/medicines", params),
  deleteMedicine: async (id, body) => await deleteData(`/api/medicines/${id}`, body),
  editMedicine: async (id, body) => await patchData(`/api/medicines/${id}`, body),
  uploadMedImage: async (body, config) => await postData(`${BASE_URL}/api/upload`, body, config),
  getCustomersbyid: async (id, body) => await getData(`/api/admin/customers/${id}`, body),
  getOrders: async (body) => await getData(`/api/admin/orders`, body),
  updateOrderStatus: async (id, body) => await patchData(`/api/admin/orders/status/${id}`, body),
  assignDeliveryAgent: async ({ orderId, agentId }) => await patchData(`/api/admin/orders/assign`, { orderId, agentId }),
  stock_and_expiry: async (body) => await getData('/api/medicines', body),
  addCmsSection: async (params) => await postData("/api/pages", params),
  getCmsSection: async (body) => await getData("/pages", body),
  getCmsSectionDetail: async (slug, body) => await getData(`/pages/${slug}`, body),
  getPrescription: async (body) => await getData('/api/admin/prescriptions', body),
  prescriptionStatus: async (id, body) => await patchData(`/api/admin/prescriptions/${id}/status`, body),
  addFaqSection: async (params) => await postData("/api/faqs", params),
  getFaqSection: async (body) => await getData("/api/faqs", body),
  editFaqSection: async (id, body) => await patchData(`/api/faqs/${id}`, body),
  deleteFaqSection: async (id, body) => await deleteData(`/api/faqs/${id}`, body),


  //  ------------------- Delivery Agent ---------------------

  getTask: async (body) => await getData(`/api/delivery/tasks`, body),
  orderStatusUpdate: async (id, body) => await patchData(`/api/delivery/tasks/${id}/status`, body),


  // ----------------- Customer Panel -----------------
  medicinesList: async (pages, body) => await getData(`/api/medicines?page=${pages}`, body),
  getWishlist: async (body) => await getData('/api/wishlist', body),
  addToWishlist: async (id) => await postData('/api/wishlist/add', { medicineId: id }),
  searchMedicine: async (params) => await getData('/api/medicines/search/suggestions', params),
  getOrderDetail: async (body) => await getData('/api/orders', body),
  addToCart: async (payload) => await postData('/api/cart/add', payload),
  getCart: async (body) => await getData(`/api/cart`, body),
  updateCartQuantity: async (id, params) => await patchData(`/api/cart/update/${id}`, params),
  removeFromCart: async (id, body) => await deleteData(`/api/cart/remove/${id}`, body),
  addAddress: async (params) => await postData('/api/addresses', params),
  getAddress: async (body) => await getData(`/api/addresses`, body),
  deleteAdress: async (id, body) => await deleteData(`/api/addresses/${id}`, body),
  getOrderHistory: async (body) => await getData(`/api/orders`, body),
  checkout: async (params) => await postData(`/api/orders/checkout`, params),
  getDeliverySlot: async (body) => await getData(`/api/config/delivery-slots`, body),
  uploadPrescription: async (params) => await postData(`/api/prescriptions`, params),
  getPrescriptions: async (body) => await getData(`/api/prescriptions`, body),
  stripePayment: async(payload) => await postData(`/api/payment/create-checkout-session`, payload),


  // ----------------- Customer Panel ----------------
  // aiModelUploadPrescription: async(params)=> await postData(`/prescriptions/upload`, params),
  aiModelUploadPrescription: async (body, config) => await postData(`/prescriptions/upload`, body, config,{ timeout: 120000}),
};
