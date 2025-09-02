import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../../pages/admin/dashboard'
import PrescriptionManagement from '../../pages/admin/perscriptionManagment'
import MedicineManagement from '../../pages/admin/medicineManagment'
import OrderManagement from '../../pages/admin/orderManagment'

const AdminRoutes = () => {
  return (
    <>
      <AdminLayout>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard/>} />   
        <Route path='/prescriptionManagment' element={<PrescriptionManagement/>} />  
        <Route path='/medicineManagment' element={<MedicineManagement/>} />   
        <Route path='/orderManagment' element={<OrderManagement/>} />   


     </Routes>
    </AdminLayout>
    </>
  )
}

export default AdminRoutes
