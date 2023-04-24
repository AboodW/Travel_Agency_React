import React from "react";
import ReviewsTitles from "./ReviewsTitles";
import ReviewsCard from "./ReviewsCard";
import "./Reviews.css";
import { cardsDescription } from "../../constants/reviewsText";

const Reviews = () => {
  return (
    <div className="container mt-5 mx-auto">
      <div className="Reviews">
        <ReviewsTitles />
        <div className="row">
          {cardsDescription.map((card, index) => (
            <ReviewsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
