import React, { useState } from "react";
import profile from '../../assets/images/profile.png'
import {
  NavbarContainer, Left,Right,Profile,DropdownMenu
} from './style';




const NavbarDA = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <NavbarContainer>
        <Left>
          <span>Delivery-Dashboard</span>
        </Left>
        <Right>
          <Profile>
            <div className="profile">
              <img src={profile} alt="Profile" onClick={toggleDropdown} />
              <span onClick={toggleDropdown}>Wan Fateh</span>
            </div>
            {dropdownOpen && (
              <DropdownMenu>
                <li onClick={''}>Profile</li>
                <li>Logout</li>
              </DropdownMenu>

            )}
          </Profile>
        </Right>
      </NavbarContainer>
    </div>
  );
};

export default NavbarDA;

