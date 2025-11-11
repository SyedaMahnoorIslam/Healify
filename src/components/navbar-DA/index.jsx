
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-image.png";
import {
  NavbarContainer,
  Left,
  Right,
  Profile,
  DropdownMenu,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Roles } from "../../enum/roles";
import { UseProfile } from "../useHooks";

const NavbarDA = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");
  const { getProfile } = UseProfile();
  const [profile, setProfile] = useState(null);

  // Dropdown items
  const adminDropdown = [
    { label: "Profile", path: "/admin/profileSetting" },
    { label: "Logout", path: "/logout" },
  ];
  const deliveryAgentDropdown = [
    { label: "Profile", path: "/delivery-agent/profileSetting" },
    { label: "Logout", path: "/logout" },
  ];

  const dropdownItems =
    userRole === Roles.ADMIN
      ? adminDropdown
      : userRole === Roles.DELIVERYAGENT
      ? deliveryAgentDropdown
      : [];

  const handleNavigation = (path) => {
    if (path === "/logout") {
      localStorage.clear();
      navigate("/auth/login");
    } else {
      navigate(path);
    }
    setDropdownOpen(false);
  };

  const fetchProfile = async () => {
    const res = await getProfile();
    if (res) setProfile(res);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <NavbarContainer>
      <Left>
        <span>Dashboard</span>
      </Left>
      <Right>
        <Profile>
          <div className="profile">
            <img src={Logo} alt="Profile" onClick={toggleDropdown} />
            <span onClick={toggleDropdown}>
              {profile?.name ? profile.name : "Loading..."}
            </span>
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
      </Right>
    </NavbarContainer>
  );
};

export default NavbarDA;
