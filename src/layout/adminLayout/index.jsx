import React from 'react'
 import { Main,LeftDiv } from './style.js';
import Sidebar from '../../components/sidebar-DA/index.jsx'
import NavbarDA from '../../components/navbar-DA/index.jsx';

const AdminLayout = ({ children }) => {
  return (
    <Main>
      <LeftDiv>
        <div><Sidebar /></div>
      </LeftDiv>
    
      <div className="dA-content">
        <NavbarDA/>
        {children}
      </div>

    </Main>
  )
}

export default AdminLayout
