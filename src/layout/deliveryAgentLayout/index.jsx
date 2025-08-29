import React from 'react'
import { Main,LeftDiv } from './style';
import Sidebar from '../../components/sidebar-DA';
import NavbarDA from '../../components/navbar-DA';
const DALayout = ({ children }) => {
  return (

    <Main>
      <LeftDiv>
        <Sidebar />
      </LeftDiv>
      {/* <div className='sidebar'></div> */}
      <div className="dA-content">
        <NavbarDA />
        {children}
      </div>

    </Main>

  )
}

export default DALayout
