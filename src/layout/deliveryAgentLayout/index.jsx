import React from 'react'
import { Main } from './style';
import Sidebar from '../../components/sidebar-DA';
import NavbarDA from '../../components/navbar-DA';
const DALayout = ({children}) => {
  return (
    <>
       
      <Main>
      <div className="dA-container">
          <div className='sidebar'><Sidebar/></div>
        <div className="dA-content">
          {/* <NavbarDA/> */}
          <div>
            <NavbarDA/>
            {children}
            </div>
        </div>
      </div>
    </Main>
    </>
  )
}

export default DALayout
