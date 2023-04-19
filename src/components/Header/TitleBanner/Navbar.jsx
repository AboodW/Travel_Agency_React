import React from "react";
import { headerTexts } from "./../../../constants/headerTexts";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="find">
            <div className="item">
              <img src={headerTexts[1]?.white_airplane} alt="airplane" />{" "}
              <span>Find Flight</span>
            </div>
            <div className="item">
              <img src={headerTexts[1]?.white_bed} alt="bed" />
              <span>Find Flight</span>
            </div>
          </div>
          <div className="navbar-brand">
            <img src={headerTexts[1]?.headerLogo} alt="logo" />
          </div>
          <div className="login">
            <button
              type="button"
              className="btn border-0 btn-outline text-white"
            >
              Login
            </button>
            <button type="button" className="btn bg-white signup">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
