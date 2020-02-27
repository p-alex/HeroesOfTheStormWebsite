import React, { Component } from "react";
import "./Banner.css";
import NavBar from "./NavBar/NavBar";
import VideoOne from "./Video/VideoOne";
//import VideoTwo from "./Video/VideoTwo";
//import VideoThree from "./Video/VideoThree";

class Banner extends Component {
  state = {
    slide: 1
  };

  slideHandler = id => {
    this.setState({ slide: id });
  };

  render() {
    let video = null;
    if (this.state.slide === 1) {
      video = <VideoOne />;
    }
    console.log(this.state.slide);
    return (
      <header className="banner">
        {video}

        <NavBar />
        <div className="call-to-action">
          <h1>Defy MOBA Expectations</h1>
          <p>Epic Heroes and Relentless Action on Diverse Battlegrounds</p>
          <a href="/">PLAY FREE NOW</a>
        </div>
        <div className="dots">
          <div
            className={this.state.slide === 1 ? "dot dot-active" : "dot"}
            onClick={() => this.slideHandler(1)}
          ></div>
          <div
            className={this.state.slide === 2 ? "dot dot-active" : "dot"}
            onClick={() => this.slideHandler(2)}
          ></div>
          <div
            className={this.state.slide === 3 ? "dot dot-active" : "dot"}
            onClick={() => this.slideHandler(3)}
          ></div>
        </div>
      </header>
    );
  }
}

export default Banner;
