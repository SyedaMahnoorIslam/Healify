// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Logo from "../../assets/images/logo-image.png";
// import profile from "../../assets/images/profile.png";
// import { MdNotificationsNone, MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa6";

// import {
//   StyledNav,
//   TopRow,
//   LogoName,
//   Navlinks,
//   NavIcons,
//   Profile,
//   DropdownMenu,
//   Nav,
//   Hamburger,
//   MobileMenu,
// } from "./style";

// export default function Navbar() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const navigate = useNavigate();
//   const location = useLocation(); 

//   const handleNavClick = (path) => {
//     setMenuOpen(false);
//     navigate(path);
//   };

//   // current path ke basis par active determine
//   const getActive = (path) => {
//     return location.pathname === path ? "active" : "";
//   };

//    const goToProfile =()=>{
//     navigate("/customer/profile")
//    };

//    const goToSupport =()=>{
//     navigate("/customer/support")
//    }

//   return (
//     <StyledNav>
//       <TopRow>
//         <div className="Logo-Search">
//           <LogoName>
//             <img src={Logo} alt="Healify Logo" />
//             <span>Healify</span>
//           </LogoName>
//         </div>

//         <Nav>
//           <Navlinks>
//             <ul>
//               <li>
//                 <a
//                   className={getActive("/customer/medicine")}
//                   onClick={() => handleNavClick("/customer/medicine")}
//                 >
//                   Medicine
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={getActive("/customer/productDetail")}
//                   onClick={() => handleNavClick("/customer/productDetail")}
//                 >
//                   Product Detail
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={getActive("/customer/prescription")}
//                   onClick={() => handleNavClick("/customer/prescription")}
//                 >
//                   Upload Prescription
//                 </a>
//               </li>
//             </ul>
//           </Navlinks>

//           <NavIcons>
//             <ul>
//               <li>
//                 <a
//                   className={getActive("/customer/cart")}
//                   onClick={() => handleNavClick("/customer/cart")}
//                 >
//                   <MdOutlineShoppingCart />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={getActive("/customer/wishlist")}
//                   onClick={() => handleNavClick("/customer/wishlist")}
//                 >
//                   <FaRegHeart />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={getActive("/customer/notifications")}
//                   onClick={() => handleNavClick("/customer/notifications")}
//                 >
//                   <MdNotificationsNone />
//                 </a>
//               </li>
//             </ul>
//           </NavIcons>
//         </Nav>

//         <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </Hamburger>

//         <Profile>
//           <div className="profile">
//             <img src={profile} alt="Profile" onClick={toggleDropdown} />
//             <span onClick={toggleDropdown}>Wan Fateh</span>
//           </div>
//           {dropdownOpen && (
//             <DropdownMenu>
//               <li onClick={goToProfile}>Profile</li>
//               {/* <li>Orders History</li>
//               <li>Address Book</li> */}
//               <li onClick={goToSupport}>Support</li>
//               <li>Logout</li>
//             </DropdownMenu>

//           )}
//         </Profile>
//       </TopRow>

//       <MobileMenu open={menuOpen}>
//         <ul>
//           <li>
//             <a
//               className={getActive("/customer/medicine")}
//               onClick={() => handleNavClick("/customer/medicine")}
//             >
//               Medicine
//             </a>
//           </li>
//           <li>
//             <a
//               className={getActive("/customer/productDetail")}
//               onClick={() => handleNavClick("/customer/productDetail")}
//             >
//               Product Detail
//             </a>
//           </li>
//           <li>
//             <a
//               className={getActive("/customer/prescription")}
//               onClick={() => handleNavClick("/customer/prescription")}
//             >
//               Upload Prescription
//             </a>
//           </li>
//           <li>
//             <a
//               className={getActive("/customer/cart")}
//               onClick={() => handleNavClick("/customer/cart")}
//             >
//               Cart
//             </a>
//           </li>
//           <li>
//             <a
//               className={getActive("/customer/wishlist")}
//               onClick={() => handleNavClick("/customer/wishlist")}
//             >
//               Wishlist
//             </a>
//           </li>
//           <li>
//             <a
//               className={getActive("/customer/notifications")}
//               onClick={() => handleNavClick("/customer/notifications")}
//             >
//               Notifications
//             </a>
//           </li>
//         </ul>
//       </MobileMenu>
//     </StyledNav>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-image.png";
import profile from "../../assets/images/profile.png";
import { MdNotificationsNone, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

import {
  StyledNav,
  TopRow,
  LogoName,
  Navlinks,
  NavIcons,
  Profile,
  DropdownMenu,
  Nav,
  Hamburger,
  MobileMenu,
  ThemeToggle, // New styled component for the toggle
  ToggleSwitch, // New styled component for the switch itself
  ToggleSlider, // New styled component for the slider track
} from "./style";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Get theme from local storage

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const location = useLocation();

  // --- Theme Toggle Logic ---
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // --- End Theme Toggle Logic ---

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const getActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const goToProfile = () => {
    navigate("/customer/profile");
  };

  const goToSupport = () => {
    navigate("/customer/support");
  };

  return (
    <StyledNav>
      <TopRow>
        <div className="Logo-Search">
          <LogoName>
            <img src={Logo} alt="Healify Logo" />
            <span>Healify</span>
          </LogoName>
        </div>

        <Nav>
          <Navlinks>
            <ul>
              <li>
                <a
                  className={getActive("/customer/medicine")}
                  onClick={() => handleNavClick("/customer/medicine")}
                >
                  Medicine
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/productDetail")}
                  onClick={() => handleNavClick("/customer/productDetail")}
                >
                  Product Detail
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/prescription")}
                  onClick={() => handleNavClick("/customer/prescription")}
                >
                  Upload Prescription
                </a>
              </li>
            </ul>
          </Navlinks>

          <NavIcons>
            <ul>
              <li>
                <a
                  className={getActive("/customer/cart")}
                  onClick={() => handleNavClick("/customer/cart")}
                >
                  <MdOutlineShoppingCart />
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/wishlist")}
                  onClick={() => handleNavClick("/customer/wishlist")}
                >
                  <FaRegHeart />
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/notifications")}
                  onClick={() => handleNavClick("/customer/notifications")}
                >
                  <MdNotificationsNone />
                </a>
              </li>
            </ul>
          </NavIcons>
        </Nav>

        <div className="Nav-Right-Section">
          {/* <ThemeToggle onClick={handleThemeToggle}>
            <ToggleSwitch checked={theme === "dark"}>
              <ToggleSlider className="slider" />
              {theme === "dark" ? <FaMoon color="#fff" /> : <FaSun color="#f1c40f" />}
            </ToggleSwitch>
          </ThemeToggle> */}

          <Profile>
            <div onClick={toggleDropdown}>
              <img src={profile} alt="Profile" />
              <span>Wan Fateh</span>
            </div>
            {dropdownOpen && (
              <DropdownMenu>
                <li onClick={goToProfile}>Profile</li>
                <li onClick={goToSupport}>Support</li>
                <li>Logout</li>
              </DropdownMenu>
            )}
          </Profile>

          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </div>
      </TopRow>

      <MobileMenu open={menuOpen}>
        <ul>
          <li>
            <a
              className={getActive("/customer/medicine")}
              onClick={() => handleNavClick("/customer/medicine")}
            >
              Medicine
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/productDetail")}
              onClick={() => handleNavClick("/customer/productDetail")}
            >
              Product Detail
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/prescription")}
              onClick={() => handleNavClick("/customer/prescription")}
            >
              Upload Prescription
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/cart")}
              onClick={() => handleNavClick("/customer/cart")}
            >
              Cart
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/wishlist")}
              onClick={() => handleNavClick("/customer/wishlist")}
            >
              Wishlist
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/notifications")}
              onClick={() => handleNavClick("/customer/notifications")}
            >
              Notifications
            </a>
          </li>
        </ul>
      </MobileMenu>
    </StyledNav>
  );
}