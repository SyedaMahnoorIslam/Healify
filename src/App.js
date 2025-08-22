import './App.css';
import Footer from './components/footer/index.jsx';
import AppRoutes from './AppRoutes.jsx';
import Navbar from './components/navbar/index.jsx';
import Medicine from './pages/customer/medicine/index.jsx';
import ProductDetailPage from './pages/customer/productDetail/index.jsx';
import NotificationScreen from './pages/customer/notification/index.jsx';
function App() {
  return (
    <>
     <AppRoutes/>
     
     {/* <Navbar/>
     <Medicine/>
     <ProductDetailPage/>
     <Footer/>  */}
    </>
  );
}

export default App;
