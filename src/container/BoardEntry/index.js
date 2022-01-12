import React, { useState } from "react";
import BoardEntryInfo from "./BoardEntryInfo";
import ScrollToTop from "./../../component/ScrollToTop";
import Footer from "../../component/Footer";
import SideBar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../component/Context/UserAuthContext";

const BoardEntry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useUserAuth();

  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} handleLogout={handleLogout} />
      <Navbar toggle={toggle} handleLogout={handleLogout} />
      <BoardEntryInfo />
      <Footer />
    </>
  );
};

export default BoardEntry;
