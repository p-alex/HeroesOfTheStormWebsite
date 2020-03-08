import React from "react";
import "./Footer.css";

const footer = props => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/Logos/blizz-logo.png" alt="logo" />
      </div>

      <ul className="footer-links">
        <li>
          <a href="">CAREERS</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">SUPPORT</a>
        </li>
        <li>
          <a href="">CONTACT US</a>
        </li>
        <li>
          <a href="">PRESS</a>
        </li>
        <li>
          <a href="">API</a>
        </li>
      </ul>
      <p>
        ©2020 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.
        <br />
        All trademarks referenced herein are the properties of their respective
        owners.
      </p>
      <ul className="footer-legal">
        <li>
          <a href="">PRIVACY</a>
        </li>
        <li>
          <a href="">LEGAL</a>
        </li>
        <li>
          <a href="">TERMS</a>
        </li>
        <li>
          <a href="">COOKIES</a>
        </li>
      </ul>
      <div className="pegi">
        <img src="/images/Logos/pegi.png" alt="pegi12"></img>
        <img src="/images/Logos/language.png" alt="language"></img>
        <img src="/images/Logos/violence.png" alt="violence"></img>
        <img src="/images/Logos/online.png" alt="online"></img>
        <img src="/images/Logos/ingame.jpg" alt="ingame"></img>
      </div>
    </footer>
  );
};

export default footer;
