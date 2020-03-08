import React from "react";
import "./Social.css";

const social = props => {
  return (
    <section className="social">
      <div className="social-container">
        <h1>Stay Connected</h1>
        <div className="social-icons">
          <a href="/">
            <img src="/images/Icons/reddit.png" alt="reddit"></img>
          </a>
          <a href="/">
            <img src="/images/Icons/forum.png" alt="forum"></img>
          </a>
          <a href="/">
            <img src="/images/Icons/facebook.png" alt="facebook"></img>
          </a>
          <a href="/">
            <img src="/images/Icons/twitter.png" alt="twitter"></img>
          </a>
          <a href="/">
            <img src="/images/Icons/youtube.png" alt="youtube"></img>
          </a>
          <a href="/">
            <img src="/images/Icons/twitch.png" alt="twtich"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default social;
