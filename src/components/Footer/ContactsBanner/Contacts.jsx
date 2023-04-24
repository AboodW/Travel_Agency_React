import React from "react";
import "./Contacts.css";

const Contacts = (props) => {
  const { logoImg, facebook, twitter, instagram, youtube } = props;
  return (
    <footer className="container-fluid secondbar">
      <div className="row mx-5">
        <div className="col-lg-2 col-md-3 my-2">
          <div className="footerlogo d-flex flex-column">
            <div className="">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="d-flex justify-content-between">
              <img src={facebook} alt="facebooklogo" />
              <img src={twitter} alt="twitterlogo" />
              <img src={youtube} alt="youtubelogo" />
              <img src={instagram} alt="instagramlogo" />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 my-2">
          <div className="co1 d-flex flex-column justify-content-between">
            <h6>Our Destinations</h6>
            <p className="text-black-50">Canada</p>
            <p className="text-black-50">Alaksa</p>
            <p className="text-black-50">France</p>
            <p className="text-black-50">Iceland</p>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 my-2">
          <div className="co2 d-flex flex-column justify-content-between">
            <h6>Our Activities</h6>
            <p className="text-black-50">Northern Lights</p>
            <p className="text-black-50">Cruising & sailing</p>
            <p className="text-black-50">Multi-activities</p>
            <p className="text-black-50">Kayaing</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 my-2">
          <div className="co3 d-flex flex-column justify-content-between">
            <h6>Travel Blogs</h6>
            <p className="text-black-50">Bali Travel Guide</p>
            <p className="text-black-50">Sri Lanks Travel Guide</p>
            <p className="text-black-50">Peru Travel Guide</p>
            <p className="text-black-50">Bali Travel Guide</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 my-2">
          <div className="co4 d-flex flex-column">
            <h6>About Us</h6>
            <p className="text-black-50">Our Story</p>
            <p className="text-black-50">Work with us</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 my-2">
          <div className="co5 d-flex flex-column">
            <h6>Contact Us</h6>
            <p className="text-black-50">Our Story</p>
            <p className="text-black-50">Work with us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
