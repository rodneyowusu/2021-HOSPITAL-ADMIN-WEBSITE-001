import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Image from "./../Images/Logo.jpg";
import { animateScroll as scroll } from "react-scroll";
import { Avatar } from "@material-ui/core";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = ({ toggle }) => {
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
            <NavLogo to="/" onClick={toggleHome}>
              <Avatar src={Image} style={{ marginRight: "0.5rem" }} />
              AyireAdmin
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/staffentry">Staff Entry</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/ceoentry">CEO Entry</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/staffentry">Staff Entry</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/staffentry">Logout</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
