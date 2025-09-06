import React from "react";
import LogoImg from "../../assets/images/logo-image.png";
import {
  FaHome,
  FaListAlt,
  FaBoxOpen,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaPills,
  FaShoppingCart,
  FaUser,
  FaChartBar,
  FaCog,
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
import { useNavigate } from "react-router-dom";
import { FaFilePrescription } from "react-icons/fa6";
 
const Sidebar = () => {
  const navigate = useNavigate();
  const goToDashboard= () =>{
       navigate('/admin/dashboard')
  } 
  const goToMedicineManagment= () =>{
       navigate('/admin/medicineManagment')
  }
   const goToOrderManagment= () =>{
       navigate('/admin/orderManagment')
  }
  const goToPrescriptionManagment= () =>{
       navigate('/admin/prescriptionManagment')
  }
   const goToCustomerManagment= () =>{
       navigate('/admin/customerManagment')
  } 
  const goToReportAnalytics= () =>{
       navigate('/admin/report&Analytics')
  } 
  const goToCMSManagment= () =>{
       navigate('/admin/cmsManagment')
  } 
  const goTodeliveryAgentmangment= () =>{
       navigate('/admin/deliveryAgentManagment')
  } 
 
   
  return (
    <SidebarContainer>
      <Logo>
        <Image><img src={LogoImg} alt="Logo" /></Image>
        <Name>Healify</Name>
      </Logo>
      <Menu>
        <MenuItem onClick={goToDashboard}>
          <IconWrapper><FaHome /></IconWrapper>
          <Label>Dashboard</Label>
        </MenuItem>
        <MenuItem onClick={goToMedicineManagment}>
          <IconWrapper><FaPills /></IconWrapper>
          <Label>Medicine Managment</Label>
        </MenuItem>
        <MenuItem onClick={goToPrescriptionManagment}>
          <IconWrapper><FaFilePrescription /></IconWrapper>
          <Label>Prescription Managment</Label>
        </MenuItem>
        <MenuItem onClick={goToOrderManagment}>
          <IconWrapper><FaShoppingCart /></IconWrapper>
          <Label>Order Managment</Label>
        </MenuItem>
        <MenuItem onClick={goToCustomerManagment}>
          <IconWrapper><FaUser /></IconWrapper>
          <Label>Customer Managment</Label>
        </MenuItem>
        <MenuItem onClick={goTodeliveryAgentmangment}>
          <IconWrapper><FaUser /></IconWrapper>
          <Label>DA Managment</Label>
        </MenuItem>
        <MenuItem onClick={goToReportAnalytics}>
          <IconWrapper><FaChartBar /></IconWrapper>
          <Label>Report & Analysis</Label>
        </MenuItem>
        <MenuItem onClick={goToCMSManagment}>
          <IconWrapper><FaCog /></IconWrapper>
          <Label>CMS Managment</Label>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
