import React from "react";
import MenuBtn from "./MenuBtn"
import SiteLogo from '../assets/images/site-logo.png'


const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header--left">
          <img src={SiteLogo} alt="" className="header__site-logo" />
        </div>
        <div className="header--right">
            <MenuBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
