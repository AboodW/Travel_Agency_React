import React from "react";
import Navbar from "./Navbar";
import Titles from "./Titles";
import OverLayShadow from "./OverLayShadow";
import "./TitleBanner.css";

const TitleBanner = () => {
  return (
    <header className="rounded-4">
      <OverLayShadow />
      <Navbar />
      <Titles />
    </header>
  );
};

export default TitleBanner;
