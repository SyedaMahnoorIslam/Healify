export const siteRoutes = {
// auth Routes 
login:"/auth/login",
signup:"/auth/signup",
otp:"/auth/otp",
resetPassword :"/auth/resetPassword",
forgetPassword :"/auth/forgetPassword",

// Customer Routes
 medicine :"/customer/medicine",
 productDetail:"/customer/productDetail",
 prescription:"/customer/prescription",
 cart:"/customer/cart",
 wishlist:"/customer/wishlist",
 notification :"/customer/notification",
 profile:"/customer/profile",
 checkOut:"/customer/checkOut",
 support:"/customer/support",
 
//  Admin Routes
 dashboard:"/admin/dashboard",
 prescriptionManagment:"/admin/prescriptionManagment",
 medicineManagment:"/admin/medicineManagment",
 customerManagment:"/admin/customerManagment",
 orderManagment:"/admin/orderManagment",
 deliveryAgentManagment:"/admin/deliveryAgentManagment",
 reportAnalytics:"/admin/report&Analytics",
 cmsManagment:"/admin/cmsManagment",

//  DeliveryAgent Routes
 delivery_agent_dashboard:"/delivery-agent//delivery_dashboard",
 profileSetting:"/deliveryAgent/profileSetting",
}