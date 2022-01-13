import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Image from "./../Images/Logo.jpg";
import { animateScroll as scroll } from "react-scroll";
import { Avatar } from "@material-ui/core";
import {
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  DropNavLinks,
} from "./navbarElements";

const Navbar = ({ toggle, handleLogout }) => {
  //This is to initiate the change in Navbar per scroll
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    //These are react fragments that replaces a div
    <>
      {/* <Nav scrollNav={scrollNav}> */}
      {/*Changes all other icons to the set color*/}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/home" onClick={toggleHome}>
              <Avatar src={Image} style={{ marginRight: "0.5rem" }} />
              AyireAdmin
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <DropNavLinks>
                  <CDropdown>
                    <CDropdownToggle color="secondary">
                      Staff/Board Entry
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="/staffentry">
                        Staff Entry
                      </CDropdownItem>
                      <CDropdownItem href="/boardentry">
                        Board Entry
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </DropNavLinks>
              </NavItem>

              <NavItem>
                <DropNavLinks>
                  <CDropdown>
                    <CDropdownToggle color="secondary">
                      Exeutive/CEO entry
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="/executiveentry">
                        Exe. Director Entry
                      </CDropdownItem>
                      <CDropdownItem href="/ceoentry">CEO Entry</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </DropNavLinks>
              </NavItem>

              <NavItem>
                <DropNavLinks>
                  <CDropdown>
                    <CDropdownToggle color="secondary">
                      Upc. Events/Publication entry
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">
                        Upcoming Events Entry
                      </CDropdownItem>
                      <CDropdownItem href="#">Publication Entry</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </DropNavLinks>
              </NavItem>

              {/* <NavItem>
                <NavLinks to="/ceoentry">CEO Entry</NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <CButton
                type="button"
                className="btn btn-success rounded-pill"
                onClick={handleLogout}
              >
                LogOut
              </CButton>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
