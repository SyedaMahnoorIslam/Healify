import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-image.png";
import profileImg from "../../assets/images/logo-image.png";
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
import { UseProfile } from "../useHooks";
import { Roles } from "../../enum/roles";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const userRole = localStorage.getItem("role");
  const { getProfile } = UseProfile();
  const [profile, setProfile] = useState(null);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };
  const customerDropdown = [
    { label: "Profile", path: "/customer/profile" },
    { label: "Support", path: "/customer/support" },
    { label: "Logout", path: "/logout" }
  ];
  let dropdownItems = [];
  if (userRole === Roles.CUSTOMER) {
    dropdownItems = customerDropdown;
  }
  const handleNavigation = (path) => {
    if (path === "/logout") {
      localStorage.clear();
      navigate("/auth/login");
    } else {
      navigate(path);
    }
    setDropdownOpen(false);
  };
  // Fetch Profile
  const fetchProfile = async () => {
    const res = await getProfile();
    if (res) {
      setProfile(res);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const getActive = (path) => {
    return location.pathname === path ? "active" : "";
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
              {/* <li>
                <a
                  className={getActive(`/customer/productDetail`)}
                  onClick={() => handleNavClick(`/customer/productDetail`)}
                >
                  Product Detail
                </a>
              </li> */}
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


          <Profile>
            <div onClick={toggleDropdown}>
              <img src={profileImg} alt="Profile" />
              <span onClick={toggleDropdown}>{profile?.name ? profile.name : "Loading..."}</span>
            </div>
            {dropdownOpen && (
              <DropdownMenu>
                {dropdownItems.map((item, idx) => (
                  <li key={idx} onClick={() => handleNavigation(item.path)}>
                    {item.label}
                  </li>
                ))}
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
          {/* <li>
            <a
              className={getActive("/customer/productDetail")}
              onClick={() => handleNavClick("/customer/productDetail")}
            >
              Product Detail
            </a>
          </li> */}
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