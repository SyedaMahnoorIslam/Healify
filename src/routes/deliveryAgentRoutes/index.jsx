import React from 'react'
import DALayout from '../../layout/deliveryAgentLayout'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../auth/login'

const DeliveryAgentRoutes = () => {
  return (
    <>
    <DALayout>
      <Routes>
        <Route path='/' element={< LoginPage />} />   
     </Routes>
    </DALayout>
    </>
  )
}

export default DeliveryAgentRoutes
