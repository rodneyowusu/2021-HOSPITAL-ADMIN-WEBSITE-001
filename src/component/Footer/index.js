import React from "react";
import { CFooter, CLink } from "@coreui/react";

const Footer = () => {
  return (
    <>
      <CFooter>
        <div>
          <CLink target="blank" href="https://ayireclinic.com">
            AyireClinic
          </CLink>
          <span>&copy; 2021 edgeTech</span>
        </div>
        <div>
          <span>Powered by</span>
          <CLink target="blank" href="https://ayireclinic.com">
            AyireClinic
          </CLink>
        </div>
      </CFooter>
    </>
  );
};

export default Footer;
