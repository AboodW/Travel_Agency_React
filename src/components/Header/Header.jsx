import React from "react";
import "./Header.css";
import TitleBanner from "./TitleBanner/TitleBanner";
import BookingBanner from "./BookingBanner/BookingBanner";

const Header = () => {
  return (
    <div>
      <TitleBanner />
      <BookingBanner />
    </div>
  );
};

export default Header;
