import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

//The nav is the css component and associated with style
export const Nav = styled.nav`
  background: #bdbdbd;
  //This is for changes of the navbar when scrolling.
  /* background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}; */
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  /* @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-height: 700px) {
    margin-bottom: 50px;
  }
  @media screen and (max-height: 650px) {
    margin-bottom: 250px;
  }

  @media screen and (max-height: 600px) {
    margin-bottom: 300px;
  }

  @media screen and (max-height: 530px) {
    margin-bottom: 350px;
  }

  @media screen and (max-height: 450px) {
    margin-bottom: 400px;
  }

  @media screen and (max-height: 400px) {
    margin-bottom: 400px;
  }

  @media screen and (max-height: 330px) {
    margin-bottom: 500px;
  }

  @media screen and (max-width: 300px) {
    margin-bottom: 170px;
  } */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
// Here linkR is used to refer to the routing of the content to the required page.
export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-left: 0.2rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    //This is to cause a green line beneath the nav items when scrolling.
    border-bottom: 3px solid #01bf71;
  }

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const DropNavLinks = styled.div`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    //This is to cause a green line beneath the nav items when scrolling.
    border-bottom: 3px solid #01bf71;
  }

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;
