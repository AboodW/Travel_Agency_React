import React from "react";
import "./PlanCard.css";

const PlanCard = ({ country_city, fhr, img }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
      <div className="shadowplanimages p-3 d-flex align-items-center">
        <img src={img} alt="Istanbul" />

        <div className="plantext ms-3">
          <p className="Cityname">{country_city}</p>
          <p className="fhr">{fhr}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
