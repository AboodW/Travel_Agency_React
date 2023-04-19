import React from "react";
import "./ShowPlanCard.css";
import { headerTexts } from "../../constants/headerTexts";

const ShowPlanCard = ({ bigTitle, smallTitle, buttonText, img }) => {
  const myStyles = {
    backgroundImage: `url(${img})`,
  };
  const myClasses = bigTitle === "Flights" ? "car1 absdiv" : "car2 absdiv";
  return (
    <div className="col-md-6 my-3">
      <div className={`${myClasses}`}>
        <div className="infobanner mx-auto">
          <div className="texts">
            <p className="ftitle">{bigTitle}</p>
            <p className="ftext">{smallTitle}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline border-0 showflights">
              <img src={headerTexts[1]?.PaperPlane} alt="" />
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPlanCard;
