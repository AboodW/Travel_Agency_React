import React from "react";
import "./Footer.css";
import Contacts from "./ContactsBanner/Contacts";
import Subscribe from "./SubscribeBanner/Subscribe";
import {
  firstBannerTexts,
  footerLogoSection,
} from "../../constants/footerTexts";

const Footer = () => {
  return (
    <div className="Container-fluid footerContainer">
      <Subscribe {...firstBannerTexts} />
      <Contacts {...footerLogoSection} />
    </div>
  );
};

export default Footer;
