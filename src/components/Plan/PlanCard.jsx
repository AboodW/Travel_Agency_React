import React from "react";
import "./PlanCard.css";

const PlanCard = ({ country_city, fhr, img }) => {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12 my-3">
      <div class="shadowplanimages p-3 d-flex align-items-center">
        <img src={img} alt="Istanbul" />

        <div class="plantext ms-3">
          <p class="Cityname">{country_city}</p>
          <p class="fhr">{fhr}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
