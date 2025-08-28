import React from 'react'
import DALayout from '../../layout/deliveryAgentLayout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/deliveryAgent/dashboard'

const DeliveryAgentRoutes = () => {
  return (
    <>
    <DALayout>
      <Routes>
        <Route path='/' element={< Dashboard />} />   
     </Routes>
    </DALayout>
    </>
  )
}

export default DeliveryAgentRoutes
