import React from "react";
import { planChoicesTexts } from "../../constants/planText";
import TitleBanner from "./TitleBanner";
import PlanCard from "./PlanCard";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="container d-flex flex-column">
      <TitleBanner />
      <div className="row">
        {planChoicesTexts.map((choice, index) => {
          return <PlanCard key={index} {...choice} />;
        })}
      </div>
    </div>
  );
};

export default Plan;
