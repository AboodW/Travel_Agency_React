import React from "react";
import TwoLinesText from "./TwoLinesText";
import "./ReviewsCard.css";

const ReviewsCard = (props) => {
  const {
    cardTitle,
    cardText,
    stars,
    cardAuthor,
    cardAuthorPosition,
    googleImg,
    googleText,
    cardImg,
  } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body p-0">
          <h5 className="card-title">{cardTitle}</h5>
          <TwoLinesText text={cardText} />
          <div className="author">
            <div className="mt-3">
              <img src={stars} alt="starBanner" />
            </div>

            <div className="mt-3 ">
              <p className="m-0 authorName">{cardAuthor}</p>
              <p className="pcard  authorPosition">{cardAuthorPosition}</p>
            </div>

            <a
              href="#"
              className="card-link text-decoration-none text-black-50"
            >
              <img src={googleImg} alt="" />
              {googleText}
            </a>
          </div>
        </div>
        <img src={cardImg} className="card-img-bottom" alt="..." />
      </div>
    </div>
  );
};

export default ReviewsCard;
