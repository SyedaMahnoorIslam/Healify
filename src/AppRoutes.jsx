import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import MainRoutes from './routes/mainRoutes'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<AuthRoutes/>}/>
        <Route path='/*' element={<MainRoutes/>}/>

      </Routes>
    </div>
  )
}

export default AppRoutes
