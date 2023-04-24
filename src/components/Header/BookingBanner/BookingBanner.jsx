import React from "react";
import "./BookingBanner.css";
import { headerTexts } from "../../../constants/headerTexts";

const BookingBanner = () => {
  return (
    <section className="bookingBanner">
      <div className="container">
        <div className="bar1 d-flex align-items-center">
          <img src={headerTexts[1]?.black_airplane} alt="airplane" /> Flights
          <div className="vl"></div>
          <img src={headerTexts[1]?.black_bed} alt="" /> Stays
        </div>
        <div className="bar2 row align-items-center justify-content-between mt-5">
          <div className="col-lg-3 form-floating px-1 my-2">
            <div className="input-wrapper">
              <label className="l-title" htmlFor="pos">
                From - To
              </label>
              <input
                className="l-input"
                type="pos"
                placeholder="Lahore - Karashi"
              />
              <img className="l-icon" src={headerTexts[1]?.swap} alt="arrows" />
            </div>
          </div>
          <div className="col-lg-3 form-floating px-1 my-2">
            <div className="input-wrapper">
              <label className="l-title" htmlFor="trip">
                Trip
              </label>
              <select className="l-input" name="trip" id="trip">
                <option value="return">Return</option>
              </select>
              <img
                className="l-icon"
                src={headerTexts[1]?.chevron}
                alt="chevron"
              />
            </div>
          </div>
          <div className="col-lg-3 form-floating px-1 my-2">
            <div className="input-wrapper">
              <label className="l-title" htmlFor="date">
                Depart - Return
              </label>
              <input
                className="l-input"
                id="date"
                type="date"
                placeholder="07 Nov 22 - 13 Nov 22"
              />
            </div>
          </div>
          <div className="col-lg-3 form-floating px-1 my-2">
            <div className="input-wrapper">
              <label className="l-title" htmlFor="passenger">
                Passenger - Class
              </label>
              <input
                className="l-input"
                id="passenger"
                type="text"
                placeholder="1 Passenger, Economy"
              />
            </div>
          </div>
        </div>
        <div className="bar3 mt-4">
          <div className="d-flex justify-content-lg-end justify-content-sm-center justify-content-md-center">
            <button className="btn addpromo">
              <img src={headerTexts[1]?.add_outline} alt="" /> Add Promo Code
            </button>
            <button className="btn border-0 showflights">
              <img src={headerTexts[1]?.PaperPlane} alt="" /> Show Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;
