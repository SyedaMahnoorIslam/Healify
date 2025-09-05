import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-image.png";
import profile from "../../assets/images/profile.png";
import { MdNotificationsNone, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

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
} from "./style";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  // current path ke basis par active determine
  const getActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

   const goToProfile =()=>{
    navigate("/customer/profile")
   };

   const goToSupport =()=>{
    navigate("/customer/support")
   }

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

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Profile>
          <div className="profile">
            <img src={profile} alt="Profile" onClick={toggleDropdown} />
            <span onClick={toggleDropdown}>Wan Fateh</span>
          </div>
          {dropdownOpen && (
            <DropdownMenu>
              <li onClick={goToProfile}>Profile</li>
              {/* <li>Orders History</li>
              <li>Address Book</li> */}
              <li onClick={goToSupport}>Support</li>
              <li>Logout</li>
            </DropdownMenu>

          )}
        </Profile>
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
