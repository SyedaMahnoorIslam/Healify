import React from 'react'
 import { Main,LeftDiv } from './style.js';
import Sidebar from '../../components/sidebar-DA/index.jsx'
import NavbarDA from '../../components/navbar-DA/index.jsx';

const AdminLayout = ({ children }) => {
  return (
    <Main>
      <LeftDiv>
        <Sidebar />
      </LeftDiv>
      {/* <div className='sidebar'></div> */}
      <div className="dA-content">
        <NavbarDA/>
        {children}
      </div>

    </Main>
  )
}

export default AdminLayout
