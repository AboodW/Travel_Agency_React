import React from "react";
import ShowPlanCard from "./ShowPlanCard";
import { showPlanTexts } from "../../constants/showPlan";
import "./ShowPlan.css";

const ShowPlan = () => {
  return (
    <div className="container showCont mx-auto">
      <div className="row">
        {showPlanTexts.map((p, index) => {
          return <ShowPlanCard key={index} {...p} />;
        })}
      </div>
    </div>
  );
};

export default ShowPlan;
