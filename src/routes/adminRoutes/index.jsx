import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../../pages/admin/dashboard'
import PrescriptionManagement from '../../pages/admin/perscriptionManagment'
import MedicineManagement from '../../pages/admin/medicineManagment'
import OrderManagement from '../../pages/admin/orderManagment'
import CustomerManagement from '../../pages/admin/customerManagment'
import ReportsAnalytics from '../../pages/admin/reportAnalysis'
import CmsSection from '../../pages/admin/cmsSection'
import DeliveryAgentManagement from '../../pages/admin/deliveryAgentManagment'
import ProfilePage from '../../components/profileSetting'
import FaqManagement from '../../pages/admin/faq_managment'

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
        <Route path='/deliveryAgentManagment' element={<DeliveryAgentManagement/>} />
        <Route path='/report&Analytics' element={<ReportsAnalytics/>} />  
        <Route path='/cmsManagment' element={<CmsSection/>} /> 
        <Route path='/profileSetting' element={<ProfilePage/>} />  
        <Route path='/faqManagment' element={<FaqManagement/>} />   


     </Routes>
    </AdminLayout>
    </>
  )
}

export default AdminRoutes
