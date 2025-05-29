import React from "react";
import bookMyShowLogo from "./book-my-show-logo.png";
import ellipse7 from "./ellipse-7.svg";
import "./style.css";

export const LogInEnterNumber = () => {
  return (
    <div className="log-in-enter-number">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group">
              <img className="ellipse" alt="Ellipse" src={ellipse7} />
            </div>
          </div>

          <img
            className="book-my-show-logo"
            alt="Book my show logo"
            src={bookMyShowLogo}
          />

          <div className="rectangle" />

          <div className="div" />

          <p className="please-enter-your">
            Please enter your mobile number or <br />
            email address for verification
          </p>

          <div className="text-wrapper">Enter mobile number</div>

          <div className="text-wrapper-2">Enter email address</div>

          <div className="text-wrapper-3">or</div>

          <div className="rectangle-2" />

          <div className="text-wrapper-4">Send Verification Code</div>
        </div>
      </div>
    </div>
  );
};
