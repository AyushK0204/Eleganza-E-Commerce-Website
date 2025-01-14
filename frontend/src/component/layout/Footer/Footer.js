import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>
      <div className="midFooter">
        <h1>ELEGANZA</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2023 &copy; AyushKumar</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="www.instagram.com">Instagram</a>
        <a href="www.youtube.com">Youtube</a>
        <a href="www.facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
