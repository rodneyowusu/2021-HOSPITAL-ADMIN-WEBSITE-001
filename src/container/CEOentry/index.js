import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import ScrollToTop from "../../component/ScrollToTop";
import SideBar from "../../component/Sidebar";
import CeoEntryInfo from "./CeoEntryInfo";

const CEOentry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CeoEntryInfo />
    </>
  );
};

export default CEOentry;
