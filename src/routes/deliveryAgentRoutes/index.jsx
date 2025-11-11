import React from 'react'

import { Route, Routes } from 'react-router-dom'
import DeliveryDashboard from '../../pages/deliveryAgent/delivery_dashboard'
import ProfilePage from '../../components/profileSetting'
import AdminLayout from '../../layout/adminLayout'
import ScrollToTop from '../../helpers/scrollToTop'

const DeliveryAgentRoutes = () => {
  return (
    <>
    <AdminLayout>
      <ScrollToTop/>
      <Routes>
        <Route path='/delivery-dashboard' element={< DeliveryDashboard />} />   
        <Route path='/profileSetting' element={< ProfilePage />} />   
     </Routes>
    </AdminLayout>
    </>
  )
}
export default DeliveryAgentRoutes
