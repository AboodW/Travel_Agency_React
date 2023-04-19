import React from "react";
import "./TitleBanner.css";

const TitleBanner = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div class="">
        <p class="plantitle">Plan your perfect trip</p>
        <p class="plansmallparag">
          Search Flights & Places Hire to our most popular destinations
        </p>
      </div>
      <button class="btn btn-fill btn-outline-primary seemorebutton">
        See more places
      </button>
    </div>
  );
};

export default TitleBanner;
