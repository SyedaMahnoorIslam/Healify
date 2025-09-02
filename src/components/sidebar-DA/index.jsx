import React from "react";
import LogoImg from "../../assets/images/logo-image.png";
import {
  FaHome,
  FaListAlt,
  FaBoxOpen,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
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

const Sidebar = () => {
  const navigate = useNavigate();
  const goToProfile= () =>{
       navigate('/delivery/profileSetting')
  } 
  const deliveryAgent = ["Dashboard", "Profile & Setting", "Logout"];
  const daimg = [<FaHome/>,<FaListAlt />,<FaBoxOpen /> ];
  const admin = ["Dashboard", "Medicine Managment", "Prescription Managment", "Order Managment", "Customer Managment","Report & Analysis", "CMS Section"];

  return (
    <SidebarContainer>
      <Logo>
        <Image><img src={LogoImg} alt="Logo" /></Image>
        <Name>Healify</Name>
      </Logo>
      <Menu>
             {/* {admin.map((opt) => (
            <MenuItem>
            {daimg.map((img)=>(
                <IconWrapper key={img}>{img}</IconWrapper>
            ))}
            <IconWrapper><FaHome /></IconWrapper>
              <Label key={opt}>{opt}</Label>
            </MenuItem>
          ))} */}
        <MenuItem>
          <IconWrapper><FaHome /></IconWrapper>
          <Label>Dashboard</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaListAlt /></IconWrapper>
          <Label>Delivery Tasks</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaBoxOpen /></IconWrapper>
          <Label>Task Details</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaBoxOpen /></IconWrapper>
          <Label>Update Status</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaBell /></IconWrapper>
          <Label>Notifications</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaUserCircle /></IconWrapper>
          <Label onClick={goToProfile}>Profile / Settings</Label>
        </MenuItem>
        <MenuItem>
          <IconWrapper><FaSignOutAlt /></IconWrapper>
          <Label>Logout</Label>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
