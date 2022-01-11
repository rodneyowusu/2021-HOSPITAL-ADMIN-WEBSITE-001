import React, { useState } from "react";
import BoardEntryInfo from "./BoardEntryInfo";
import ScrollToTop from "./../../component/ScrollToTop";
import Footer from "../../component/Footer";
import SideBar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";

const BoardEntry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <BoardEntryInfo />
      <Footer />
    </>
  );
};

export default BoardEntry;
