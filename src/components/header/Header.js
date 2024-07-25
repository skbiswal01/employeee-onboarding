import "./Header.scss";

import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="title">Lloyds Technology Centre</span>
      </div>
      {/* <div className="header-right">
        <input
          type="text"
          placeholder="How can i upload my details ?"
          className="search-input"
        />
        <button className="login-button">Log on</button>
      </div> */}
    </div>
  );
};

export default Header;
