import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import CustomerRoutes from './routes/customerRoutes'
import DeliveryAgentRoutes from './routes/deliveryAgentRoutes'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        <Route path='/customer/*' element={<CustomerRoutes/>}/>
        <Route path='/delivery/*' element={<DeliveryAgentRoutes/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
