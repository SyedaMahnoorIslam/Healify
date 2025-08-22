import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import AuthRoutes from './routes/authRoutes'
// import MainRoutes from './routes/mainRoutes'
import CustomerRoutes from './routes/customerRoutes'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/auth/*' element={<AuthRoutes/>}/> */}
        <Route path='/*' element={<CustomerRoutes/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
