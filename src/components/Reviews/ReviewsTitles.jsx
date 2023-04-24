import React from "react";
import { reviewsHeaderTexts } from "../../constants/reviewsText";
import "./ReviewsTitles.css";
const ReviewsTitles = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between titlebanner">
          <div className="">
            <p className="plantitle">{reviewsHeaderTexts[0]?.bigTitle}</p>
            <p className="plansmallparag">
              {reviewsHeaderTexts[0]?.smallTitle}
            </p>
          </div>
          <button className="btn btn-fill btn-outline-primary seemorebutton my-auto">
            {reviewsHeaderTexts[0]?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTitles;
