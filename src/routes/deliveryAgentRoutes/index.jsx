import React from 'react'
import DALayout from '../../layout/deliveryAgentLayout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/deliveryAgent/dashboard'
import ProfilePage from '../../pages/deliveryAgent/profileSetting'

const DeliveryAgentRoutes = () => {
  return (
    <>
    <DALayout>
      <Routes>
        <Route path='/dashboard' element={< Dashboard />} />   
        <Route path='/profileSetting' element={< ProfilePage />} />   
     </Routes>
    </DALayout>
    </>
  )
}

export default DeliveryAgentRoutes
