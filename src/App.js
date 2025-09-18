import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import AppRoutes from './AppRoutes.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const CLIENT_ID ='1031291433446-44cjabe1saf4pep1omquru7pdbrcbt4j.apps.googleusercontent.com';
  return (
    <>
    <GoogleOAuthProvider clientId ={CLIENT_ID}>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
