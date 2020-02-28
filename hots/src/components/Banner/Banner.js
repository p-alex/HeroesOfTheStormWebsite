import React, { Component } from "react";
import "./Banner.css";
import NavBar from "./NavBar/NavBar";

class Banner extends Component {
  render() {
    return (
      <header className="banner">
        <video autoPlay loop>
          <source src="/video/deathwing.mp4" />
        </video>

        <NavBar />
        <div className="call-to-action">
          <h1>Defy MOBA Expectations</h1>
          <p>Epic Heroes and Relentless Action on Diverse Battlegrounds</p>
          <a href="/">PLAY FREE NOW</a>
        </div>
        {/*}<div className="dots">
          <div
            className={this.state.slide === 1 ? "dot dot-active" : "dot"}
          ></div>
          <div
            className={this.state.slide === 2 ? "dot dot-active" : "dot"}
          ></div>
          <div
            className={this.state.slide === 3 ? "dot dot-active" : "dot"}
          ></div>
          <div
            className={this.state.slide === 4 ? "dot dot-active" : "dot"}
          ></div>
          <div
            className={this.state.slide === 5 ? "dot dot-active" : "dot"}
          ></div>
          </div>*/}
      </header>
    );
  }
}

export default Banner;
