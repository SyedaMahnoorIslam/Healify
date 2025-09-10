import React from 'react'
import DALayout from '../../layout/deliveryAgentLayout'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from '../../pages/deliveryAgent/profileSetting'
import DeliveryDashboard from '../../pages/deliveryAgent/delivery_dashboard'

const DeliveryAgentRoutes = () => {
  return (
    <>
    <DALayout>
      <Routes>
        <Route path='/delivery-dashboard' element={< DeliveryDashboard />} />   
        <Route path='/profileSetting' element={< ProfilePage />} />   
     </Routes>
    </DALayout>
    </>
  )
}
export default DeliveryAgentRoutes
