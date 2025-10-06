import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-image.png";
import profileImg from "../../assets/images/logo-image.png";
import { MdOutlineMedicalServices, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";

import {
  StyledNav,
  TopRow,
  LogoName,
  Navlinks,
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
                  className={getActive("/customer/medicine"|| "/customer/productDetail/:id")}
                  onClick={() => handleNavClick("/customer/medicine")}
                >
                  <MdOutlineMedicalServices /> Medicine
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/prescription")}
                  onClick={() => handleNavClick("/customer/prescription")}
                >
                  <HiOutlineDocumentArrowUp /> Upload Prescription
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/cart")}
                  onClick={() => handleNavClick("/customer/cart")}
                >
                  <MdOutlineShoppingCart /> Cart
                </a>
              </li>
              <li>
                <a
                  className={getActive("/customer/wishlist")}
                  onClick={() => handleNavClick("/customer/wishlist")}
                >
                  <FaRegHeart /> Wishlist
                </a>
              </li>
            </ul>
          </Navlinks>
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

          <Hamburger
            className={menuOpen ? "open" : ""}
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
              className={getActive("/customer/medicine" || "/customer/productDetail/:id")}
              onClick={() => handleNavClick("/customer/medicine"  || "/customer/productDetail/:id")}
            >
              <MdOutlineMedicalServices /> Medicine
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/prescription")}
              onClick={() => handleNavClick("/customer/prescription")}
            >
              <HiOutlineDocumentArrowUp /> Upload Prescription
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/cart")}
              onClick={() => handleNavClick("/customer/cart")}
            >
              <MdOutlineShoppingCart /> Cart
            </a>
          </li>
          <li>
            <a
              className={getActive("/customer/wishlist")}
              onClick={() => handleNavClick("/customer/wishlist")}
            >
              <FaRegHeart /> Wishlist
            </a>
          </li>
        </ul>
      </MobileMenu>
    </StyledNav>
  );
}