import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import CustomerRoutes from './routes/customerRoutes'
import DeliveryAgentRoutes from './routes/deliveryAgentRoutes'
import AdminRoutes from './routes/adminRoutes'
import ProtectedRoute from '../src/routes/protectedRoutes'

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Navigate to='/auth/login' />} />
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route
          path='/customer/*'
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <CustomerRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path='/delivery-agent/*'
          element={
            <ProtectedRoute allowedRoles={['delivery_agent']}>
              <DeliveryAgentRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin/*'
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path='/unauthorized'
          element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>🚫 Access Denied</h2>}
        />
      </Routes>
    </div>
  )
}

export default AppRoutes
