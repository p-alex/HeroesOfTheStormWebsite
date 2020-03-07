import React, { Component } from "react";
import "./NavBarMobile.css";
import NavBarMobileBackdrop from "./NavBarMobileBackdrop/NavBarMobileBackdrop";
import BlizzardNavBarMobile from "../../../BlizzardNavBar/BlizzardNavBarMobile/BlizzardNavBarMobile";

class NavBarMobile extends Component {
  state = {
    gameMenuOpen: false
  };
  toggleGamesLinksHandler = e => {
    e.preventDefault();
    document
      .getElementById("mobile-game")
      .classList.toggle("games-links-active");
    if (this.state.gameMenuOpen) {
      document.getElementById("games-arrow").innerHTML = "˅";
      this.setState({ gameMenuOpen: false });
    } else {
      document.getElementById("games-arrow").innerHTML = "˄";
      this.setState({ gameMenuOpen: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <BlizzardNavBarMobile />
        {this.props.isNavBarOpen ? (
          <React.Fragment>
            <NavBarMobileBackdrop closeNavBar={this.props.closeNavBar} />
            <div className="navBarMobile">
              <div
                className="closeNavBarMobile"
                onClick={this.props.closeNavBar}
              >
                <span>X</span>
              </div>
              <img src="/images/Logos/hots-logo-big.png" />
              <ul>
                <li>
                  <a
                    href="/"
                    className="link-active"
                    onClick={this.toggleGamesLinksHandler}
                  >
                    GAME
                    <span
                      className="arrow-down"
                      id="games-arrow"
                      style={{
                        marginLeft: "5px",
                        fontSize: "14px",
                        color: "#fff",
                        position: "relative",
                        bottom: "1px"
                      }}
                    >
                      ˅
                    </span>
                  </a>
                  <ul className="NavBarMobile-game-links" id="mobile-game">
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
              <a href="/" className="play-free">
                PLAY FOR FREE
              </a>
              <div className="blizzLogoNavBarMobile">
                <img src="/images/Logos/blizz-logo-white.png" />
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default NavBarMobile;
