import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../auth/login'
import Signup from '../../auth/signup'
import ResetPassword from '../../auth/resetPassword'
import ForgetPassword from '../../auth/forgetPasssword'
import AuthLayout from '../../layout/authLayout'
import OtpVerify from '../../auth/otp'

const AuthRoutes = () => {
  return (
    <div>
      <AuthLayout>
        <Routes>
          <Route path='/' element={<Navigate to={'/auth/login'} />} />
          <Route path='/login' element={< Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp-verify' element={<OtpVerify/>}/>
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Routes>
      </AuthLayout>
    </div>
  )
}

export default AuthRoutes


