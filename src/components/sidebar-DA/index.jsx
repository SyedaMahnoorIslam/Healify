import React from "react";
import LogoImg from "../../assets/images/logo-image.png";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import {
  FaHome,
  FaPills,
  FaShoppingCart,
  FaUser,
  FaChartBar,
  FaCog,
  FaUserCog,
} from "react-icons/fa";
import {
  SidebarContainer,
  Logo,
  Menu,
  MenuItem,
  IconWrapper,
  Label,
  Image,
  Name,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFilePrescription, FaQ } from "react-icons/fa6";
import { Roles } from "../../enum/roles";
import { GrUserWorker } from "react-icons/gr";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const adminMenu = [
    { label: "Dashboard", icon: <FaHome />, path: "/admin/dashboard" },
    { label: "Medicine Managment", icon: <FaPills />, path: "/admin/medicineManagment" },
    { label: "Prescription Managment", icon: <FaFilePrescription />, path: "/admin/prescriptionManagment" },
    { label: "Order Managment", icon: <FaShoppingCart />, path: "/admin/orderManagment" },
    { label: "Customer Managment", icon: <FaUserCog />, path: "/admin/customerManagment" },
    { label: "DA Managment", icon: <GrUserWorker />, path: "/admin/deliveryAgentManagment" },
    { label: "Report & Analysis", icon: <FaChartBar />, path: "/admin/report&Analytics" },
    { label: "CMS Managment", icon: <FaCog />, path: "/admin/cmsManagment" },
    { label: "FAQ Managment", icon: <FaQ />, path: "/admin/faqManagment" },

  ];
  const deliveryAgentMenu = [
    { label: "Dashboard", icon: <FaHome />, path: "/delivery-agent/delivery-dashboard" },
    { label: "Profile & Setting", icon: <MdOutlineAdminPanelSettings />, path: "/delivery-agent/profileSetting" },
  ];
  const userRole = localStorage.getItem("role");
  let menuItems = [];
  if (userRole === Roles.ADMIN || location.pathname ==='/admin/*') menuItems = adminMenu;
  else if (userRole === Roles.DELIVERYAGENT || location.pathname ==='/delivery-agent/*') menuItems = deliveryAgentMenu;
  

  return (
    <SidebarContainer>
      <Logo>
        <Image><img src={LogoImg} alt="Logo" /></Image>
        <Name>Healify</Name>
      </Logo>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? "active" : ""}
          >
            <IconWrapper>{item.icon}</IconWrapper>
            <Label>{item.label}</Label>
          </MenuItem>
        ))}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
