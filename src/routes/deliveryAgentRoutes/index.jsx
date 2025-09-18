import React from 'react'
import DALayout from '../../layout/deliveryAgentLayout'
import { Route, Routes } from 'react-router-dom'
import DeliveryDashboard from '../../pages/deliveryAgent/delivery_dashboard'
import ProfilePage from '../../components/profileSetting'

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
