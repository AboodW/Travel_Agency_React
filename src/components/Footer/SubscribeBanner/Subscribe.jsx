import React from "react";
import "./Subscribe.css";

const Subscribe = (props) => {
  const {
    bigTitle,
    smallTitle,
    smallTitleText,
    buttonText,
    inputFieldPlaceHolder,
    img,
  } = props;
  return (
    <div className="container-fluid firstbar d-flex justify-content-between mx-auto py-0">
      <div className="content d-flex flex-column justify-content-between">
        <p className="bigtitle">
          Subscribe <br />
          Newsletter
        </p>

        <div className="subtext">
          <p className="subtext_title">{smallTitle}</p>
          <p className="subtext_content">{smallTitleText}</p>
        </div>

        <div className="d-flex justify-content-between footerInput ">
          <input
            type="email"
            className="form-control"
            placeholder={inputFieldPlaceHolder}
          />
          <button className="btn mx-2" type="button" id="button-addon2">
            {buttonText}
          </button>
        </div>
      </div>
      <div className="bgimg">
        <img src={img} alt="mail" />
      </div>
    </div>
  );
};

export default Subscribe;
