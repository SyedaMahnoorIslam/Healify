import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import CustomerRoutes from './routes/customerRoutes'
import DeliveryAgentRoutes from './routes/deliveryAgentRoutes'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/*' element={<AuthRoutes/>}/> */}
        {/* <Route path='/*' element={<CustomerRoutes/>}/> */}
        <Route path='/*' element={<DeliveryAgentRoutes/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
