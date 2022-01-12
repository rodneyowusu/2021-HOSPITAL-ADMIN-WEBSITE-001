import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./sidebarElements";
import { CButton } from "@coreui/react";

const SideBar = ({ isOpen, toggle, handleLogout }) => {
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
          <SidebarLink to="#" onClick={toggle}>
            Upcoming Events Entry
          </SidebarLink>
          <SidebarLink to="#" onClick={toggle}>
            Publication Entry
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <CButton
            type="button"
            className="btn btn-success rounded-pill"
            onClick={handleLogout}
            style={{ marginBottom: "15px" }}
          >
            LogOut
          </CButton>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
