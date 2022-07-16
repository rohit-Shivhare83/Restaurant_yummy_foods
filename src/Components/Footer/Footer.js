import React from "react";

import Voucher from "../../Images/Voucher.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="detail_container">
          <div className="left">
            <h4>Get News, Info & More! </h4>
            <input type="text" placeholder="Enter Your Email" />
            <br />
            <button type="submit">Subscribe</button>
          </div>
          <div className="center">
            <h4>Gift and Voucher</h4>
            <img className="detail_img" src={Voucher} alt="" />
          </div>
          <div className="right ">
            <h4>Restaurant Photo Gallary</h4>
            <img
              className="detail_img"
              src="https://elchico.in/wp-content/uploads/2022/02/veggiepage.jpg"
              alt="#Restaurant"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &#169; 2022 All Right Reserved | Build By Rohit Shivhare | Made with
          Love
        </p>
      </div>
    </div>
  );
};

export default Footer;
