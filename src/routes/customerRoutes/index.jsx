import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerLayout from '../../layout/customerlayout'
import Medicine from '../../pages/customer/medicine'
import ProductDetailPage from '../../pages/customer/productDetail'
import WishList from '../../pages/customer/wishlist'
import UploadPrescription from '../../pages/customer/prescription'
import NotificationScreen from '../../pages/customer/notification'
import CartPage from '../../pages/customer/cart'
import OrderDetail from '../../pages/customer/cart/orderDetail'


const CustomerRoutes = () => {
    return (
        <div>
            <CustomerLayout>
                <Routes>
                    <Route path='/' element={< Medicine/>} />
                    <Route path='/productDetail' element={<ProductDetailPage />} />
                    <Route path='/prescription' element={<UploadPrescription />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/wishlist' element={<WishList />} />
                    <Route path='/notifications' element={<NotificationScreen/>} />
                    <Route path='/orderDetail' element={<OrderDetail/>} />

                    
                    

                </Routes>
            </CustomerLayout>
        </div>
    )
}

export default CustomerRoutes
