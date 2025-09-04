import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../../pages/admin/dashboard'
import PrescriptionManagement from '../../pages/admin/perscriptionManagment'
import MedicineManagement from '../../pages/admin/medicineManagment'
import OrderManagement from '../../pages/admin/orderManagment'
import CustomerManagement from '../../pages/admin/customerManagment'
import Reports from '../../pages/admin/reportAnalysis'
import ReportsAnalytics from '../../pages/admin/reportAnalysis'
import CmsSection from '../../pages/admin/cmsSection'

const AdminRoutes = () => {
  return (
    <>
      <AdminLayout>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard/>} />   
        <Route path='/prescriptionManagment' element={<PrescriptionManagement/>} />  
        <Route path='/medicineManagment' element={<MedicineManagement/>} />   
        <Route path='/orderManagment' element={<OrderManagement/>} />   
        <Route path='/customerManagment' element={<CustomerManagement/>} />
        <Route path='/report&Analytics' element={<ReportsAnalytics/>} />  
        <Route path='/cmsManagment' element={<CmsSection/>} />   
     </Routes>
    </AdminLayout>
    </>
  )
}

export default AdminRoutes
