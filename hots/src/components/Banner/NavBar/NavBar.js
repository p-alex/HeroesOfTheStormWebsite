import React from "react";
import "./NavBar.css";

const navBar = props => {
  return (
    <nav className="navBar">
      <div className="navBar-logo-links">
        <img src="/images/hots-logo-big.png" alt="logo" />
        <ul>
          <li>
            <a href="/">GAME</a>
          </li>
          <li>
            <a href="/">HEROES</a>
          </li>
          <li>
            <a href="/">LEADERBOARDS</a>
          </li>
          <li>
            <a href="/">NEWS</a>
          </li>
          <li>
            <a href="/">FORUMS</a>
          </li>
        </ul>
      </div>
      <div className="play-free-btn">
        <a href="/">PLAY FREE</a>
      </div>
    </nav>
  );
};

export default navBar;
