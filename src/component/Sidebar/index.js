import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./sidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/staffentry" onClick={toggle}>
            Staff Entry
          </SidebarLink>
          <SidebarLink to="/boardentry" onClick={toggle}>
            Board Entry
          </SidebarLink>
          <SidebarLink to="/executiveentry" onClick={toggle}>
            Exe. Director Entry
          </SidebarLink>
          <SidebarLink to="/ceoentry" onClick={toggle}>
            CEO Entry
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Logout</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
