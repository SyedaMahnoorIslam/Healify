// import React from 'react'
// import authImage from '../../assets/images/auth-img.jpg'
// import{
// Main,
// }from './style'
// const AuthLayout = ({children}) => {
//   return (
//     <Main>
//     <div className="auth-container">
//       <div className="auth-image">
//         <img src={authImage} alt="Auth Visual" />
//       </div>

//       <div className="auth-content">
//         {children}
//       </div>
//     </div>
//     </Main>
//   )
// }

// export default AuthLayout


import React from 'react';
import authImage from '../../assets/images/auth-img.jpg';
import { Main } from './style';

const AuthLayout = ({ children }) => {
  return (
    <Main>
      <div className="auth-container">
        <div className="auth-image">
          <img src={authImage} alt="Auth Visual" />
        </div>

        <div className="auth-content">
          {children}
        </div>
      </div>
    </Main>
  );
};

export default AuthLayout;
