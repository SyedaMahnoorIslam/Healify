import './App.css';
import Footer from './components/footer/index.jsx';
import AppRoutes from './AppRoutes.jsx';
import Navbar from './components/navbar/index.jsx';
import Medicine from './pages/customer/medicine/index.jsx';
import ProductDetailPage from './pages/customer/productDetail/index.jsx';
import NotificationScreen from './pages/customer/notification/index.jsx';
import CartPage from './pages/customer/cart/addToCart/index.jsx';
import AddToCart from './pages/customer/cart/addToCart/index.jsx';
import LoginPage from './auth/login/index.jsx';
import Checkout from './pages/customer/checkout/index.jsx';

function App() {
  return (
    <>
     <AppRoutes/>
     {/* <Checkout/> */}
     {/* <OrdersDetail/> */}
     {/* <AddToCart/> */}
     {/* <Navbar/>
     <Medicine/>
     <ProductDetailPage/>
     <Footer/>  */}
     
    </>
  );
}

export default App;
