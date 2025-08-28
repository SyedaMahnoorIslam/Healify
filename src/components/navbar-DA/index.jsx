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

// import React from "react";
// import styled from "styled-components";

// const Navbar = () => {
//   return (
//     <Nav>
//       {/* Left - Logo */}
//       <Logo>Healify</Logo>

//       {/* Center - Search Bar */}
//       <SearchContainer>
//         <SearchInput type="text" placeholder="Search..." />
//       </SearchContainer>

//       {/* Right - Profile */}
//       <ProfileContainer>
//         <UserName>Mahnoor</UserName>
//         <ProfilePic
//           src=""
//           alt="Profile"
//         />
//       </ProfileContainer>
//     </Nav>
//   );
// };

// export default Navbar;

// // Styled Components
// const Nav = styled.nav`
//   width: 100%;
//   height: 70px;
//   background: #ffffff;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 25px;
//   box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
// `;

// const Logo = styled.h2`
//   font-size: 22px;
//   font-weight: bold;
//   color: #2c3e50;
// `;

// const SearchContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 10px 15px;
//   border-radius: 20px;
//   border: 1px solid #ccc;
//   outline: none;
//   font-size: 14px;

//   &:focus {
//     border-color: #3498db;
//   }
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const UserName = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   color: #34495e;
// `;

// const ProfilePic = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   object-fit: cover;
//   cursor: pointer;
// `;
