import { Roles } from "./roles";
import { siteRoutes } from "./siteRoutes";

export const RoleBasedRoutes = {

    [Roles.ADMIN]: [
        siteRoutes.dashboard,
        siteRoutes.medicineManagment,
        siteRoutes.customerManagment,
        siteRoutes.orderManagment,
        siteRoutes.deliveryAgentManagment,
        siteRoutes.reportAnalytics,
        siteRoutes.cmsManagment,
    ],
    [Roles.CUSTOMER]: [
        siteRoutes.medicine,
        siteRoutes.productDetail,
        siteRoutes.prescription,
        siteRoutes.cart,
        siteRoutes.wishlist,
        siteRoutes.profile,
        siteRoutes.support,
        siteRoutes.checkOut,
        siteRoutes.notification,
    ],
    [Roles.DELIVERYAGENT]: [
        siteRoutes.delivery_agent_dashboard,
        siteRoutes.profileSetting

    ]
}