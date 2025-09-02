import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../../pages/admin/dashboard'
import PrescriptionManagement from '../../pages/admin/perscriptionManagment'

const AdminRoutes = () => {
  return (
    <>
      <AdminLayout>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard/>} />   
        <Route path='/prescriptionManagment' element={<PrescriptionManagement/>} />   
     </Routes>
    </AdminLayout>
    </>
  )
}

export default AdminRoutes
