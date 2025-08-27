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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <Image><img src={LogoImg}/></Image>
        <Name>Healify</Name>
      </Logo>
      <Menu>
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
          <Label>Profile / Settings</Label>
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
