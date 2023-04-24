import React from "react";
import "./TitleBanner.css";

const TitleBanner = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="">
        <p className="plantitle">Plan your perfect trip</p>
        <p className="plansmallparag">
          Search Flights & Places Hire to our most popular destinations
        </p>
      </div>
      <button className="btn btn-fill btn-outline-primary seemorebutton">
        See more places
      </button>
    </div>
  );
};

export default TitleBanner;
