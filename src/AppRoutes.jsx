import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import CustomerRoutes from './routes/customerRoutes'
import DeliveryAgentRoutes from './routes/deliveryAgentRoutes'
import AdminRoutes from './routes/adminRoutes'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/auth/login'}/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        <Route path='/customer/*' element={<CustomerRoutes/>}/>
        <Route path='/deliveryAgent/*' element={<DeliveryAgentRoutes/>}/>
        <Route path='admin/*' element={<AdminRoutes/>}/>

      </Routes>
    </div>
  )
}

export default AppRoutes
