import React, { Component } from "react";
import "./NavBar.css";
import NavBarMobile from "./NavBarMobile/NavBarMobile";

class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggleNavBarHandler = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navBarMobilePlaceholder">
          <div className="hamburger">
            <img
              src="/images/Icons/hamburger-icon.png"
              onClick={this.toggleNavBarHandler}
            />
          </div>

          <img src="/images/Logos/hots-logo-big.png" />
          <p>Stuff</p>
        </nav>
        <NavBarMobile
          isOpen={this.state.isOpen}
          close={this.toggleNavBarHandler}
        />
        <nav className="navBar">
          <div className="navBar-logo-links">
            <a href="https://heroesofthestorm.com/en-us/" className="logo-big">
              <img src="/images/logos/hots-logo-big.png" alt="logo" />
            </a>
            <a
              href="https://heroesofthestorm.com/en-us/"
              className="logo-small"
            >
              <img src="/images/logos/hots-logo-small.png" alt="logo" />
            </a>
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
      </React.Fragment>
    );
  }
}

export default NavBar;
