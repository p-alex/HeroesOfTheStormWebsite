import React, { Component } from "react";
import "./NavBar.css";
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import BlizzardNavBarMobile from "../../BlizzardNavBar/BlizzardNavBarMobile/BlizzardNavBarMobile";

class NavBar extends Component {
  state = {
    isNavBarOpen: false,
    isBlizzNavBarOpen: false,
    isGamesListOpen: false
  };
  toggleGames = e => {
    e.preventDefault();
    document
      .getElementById("games-list-desktop")
      .classList.toggle("games-list-desktop-active");
    if (this.state.isGamesListOpen) {
      this.setState({ isGamesListOpen: false });
    } else {
      this.setState({ isGamesListOpen: true });
    }
  };
  toggleNavBarHandler = () => {
    if (this.state.isNavBarOpen) {
      this.setState({ isNavBarOpen: false });
    } else {
      this.setState({ isNavBarOpen: true });
    }
  };
  toggleBlizzNavBarHandler = () => {
    if (this.state.isBlizzNavBarOpen) {
      this.setState({ isBlizzNavBarOpen: false });
    } else {
      this.setState({ isBlizzNavBarOpen: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navBarMobilePlaceholder">
          <div className="hamburger" onClick={this.toggleNavBarHandler}>
            <img src="/images/Icons/hamburger-icon.png" />
          </div>

          <img src="/images/Logos/hots-logo-big.png" />
          <div
            className="BlizzMobile-icon"
            onClick={this.toggleBlizzNavBarHandler}
          >
            <img src="/images/Icons/BlizzMobile-icon.png" />
          </div>
        </nav>
        <NavBarMobile
          isNavBarOpen={this.state.isNavBarOpen}
          closeNavBar={this.toggleNavBarHandler}
        />
        <BlizzardNavBarMobile
          isBlizzNavBarOpen={this.state.isBlizzNavBarOpen}
          closeBlizzNavBar={this.toggleBlizzNavBarHandler}
        />
        <nav className="navBar">
          <div className="navBar-logo-links">
            <a
              href="https://heroesofthestorm.com/en-us/"
              className="logo-big"
              target="_blank"
            >
              <img src="/images/Logos/hots-logo-big.png" alt="logo" />
            </a>
            <a
              href="https://heroesofthestorm.com/en-us/"
              className="logo-small"
              target="_blank"
            >
              <img src="/images/Logos/hots-logo-small.png" alt="logo" />
            </a>
            <ul className="navBar-logo-links-ul">
              <li>
                <a href="/" onClick={this.toggleGames}>
                  GAME{" "}
                  <span
                    className="arrow-down"
                    id="games-toggle"
                    style={{
                      fontSize: "15px",
                      color: "white",
                      bottom: "1px"
                    }}
                  >
                    {this.state.isGamesListOpen ? "˄" : "˅"}
                  </span>
                </a>
                <ul className="NavBarGamesToggle" id="games-list-desktop">
                  <li>
                    <a href="/">Overview</a>
                  </li>
                  <li>
                    <a href="/">Roles</a>
                  </li>
                  <li>
                    <a href="/">Modes</a>
                  </li>
                  <li>
                    <a href="/">Heroes Brawl</a>
                  </li>
                  <li>
                    <a href="/">Battlegrounds</a>
                  </li>
                  <li>
                    <a href="/">Ranked Play</a>
                  </li>
                  <li>
                    <a href="/">Media</a>
                  </li>
                </ul>
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
