// import React from 'react'
// import { Main, LeftDiv ,RightDiv} from './style.js';
// import Sidebar from '../../components/sidebar-DA/index.jsx'
// import NavbarDA from '../../components/navbar-DA/index.jsx';

// const AdminLayout = ({ children }) => {
//   return (
//     <Main>
//       <LeftDiv>
//         <div><Sidebar /></div>
//       </LeftDiv>
//       <RightDiv>
//         <div className='navbar'><NavbarDA /></div>
//         <div>{children}</div>
//       </RightDiv>
//     </Main>
//   )
// }

// export default AdminLayout
import React from "react";
import { Main, LeftDiv, RightDiv, ContentWrapper } from "./style.js";
import Sidebar from "../../components/sidebar-DA/index.jsx";
import NavbarDA from "../../components/navbar-DA/index.jsx";

const AdminLayout = ({ children }) => {
  return (
    <Main>
      <LeftDiv>
        <Sidebar />
      </LeftDiv>
      <RightDiv>
        <NavbarDA />
        <ContentWrapper>{children}</ContentWrapper>
      </RightDiv>
    </Main>
  );
};

export default AdminLayout;
