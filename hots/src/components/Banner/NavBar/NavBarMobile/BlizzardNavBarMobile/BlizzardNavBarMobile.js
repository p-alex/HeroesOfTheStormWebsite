import React, { Component } from "react";
import "./BlizzardNavBarMobile.css";
import BlizzardMobileSubmenu from "./BlizzardMobileSubmenu/BlizzardMobileSubmenu";
import BlizzardNavBarMobileBackdrop from "./BlizzardNavBarMobileBackdrop/BlizzardNavBarMobileBackdrop";
class BlizzardNavBarMobile extends Component {
  state = {
    gamesMenu: false,
    esportsMenu: false
  };

  gamesMenuHandler = e => {
    e.preventDefault();
    if (this.state.gamesMenu) {
      this.setState({
        gamesMenu: false,
        esportsMenu: false
      });
    } else {
      this.setState({
        gamesMenu: true,
        esportsMenu: false
      });
    }
  };
  esportsMenuHandler = e => {
    e.preventDefault();
    if (this.state.esportsMenu) {
      this.setState({
        gamesMenu: false,
        esportsMenu: false
      });
    } else {
      this.setState({
        gamesMenu: false,
        esportsMenu: true
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.isBlizzNavBarOpen ? (
          <React.Fragment>
            <BlizzardNavBarMobileBackdrop
              closeBlizzNavBar={this.props.closeBlizzNavBar}
            />
            <div className="BlizzardNavBarMobile">
              <div
                className="closeBlizzardNavBarMobile"
                onClick={this.props.closeBlizzNavBar}
              >
                <span>X</span>
              </div>
              <div className="BlizzardNavBarMobile-logo">
                <img src="/images/Logos/blizz-logo.png" alt="logo" />
              </div>
              <ul className="BlizzardNavBarMobile-account">
                <li>
                  <div className="BlizzardNavBarMobile-logInBtn">
                    <a href="/">Log In</a>
                  </div>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Account Settings</a>
                </li>
                <li>
                  <a href="/">Create a Free Account</a>
                </li>
              </ul>
              <ul className="BlizzardNavBarMobile-links">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li onClick={this.gamesMenuHandler}>
                  <a href="/">
                    GAMES
                    <span className="arrow-down">
                      {this.state.gamesMenu ? "˄" : "˅"}
                    </span>
                  </a>
                </li>
                <BlizzardMobileSubmenu gamesMenu={this.state.gamesMenu} />
                <li>
                  <a href="/">SHOP</a>
                </li>
                <li>
                  <a href="/">NEWS</a>
                </li>
                <li onClick={this.esportsMenuHandler}>
                  <a href="/">
                    ESPORTS
                    <span className="arrow-down">
                      {this.state.esportsMenu ? "˄" : "˅"}
                    </span>
                  </a>
                </li>
                <BlizzardMobileSubmenu esportsMenu={this.state.esportsMenu} />
                <li>
                  <a href="/">BLIZZCON</a>
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default BlizzardNavBarMobile;
