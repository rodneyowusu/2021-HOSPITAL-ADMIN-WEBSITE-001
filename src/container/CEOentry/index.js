import React, { useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import ScrollToTop from "../../component/ScrollToTop";
import SideBar from "../../component/Sidebar";
import CeoEntryInfo from "./CeoEntryInfo";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../component/Context/UserAuthContext";

const CEOentry = () => {
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
      <CeoEntryInfo />
      <Footer />
    </>
  );
};

export default CEOentry;
