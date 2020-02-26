import React, { Component } from "react";
import "./BlizzardNavBar.css";
import BlizzSubmenu from "./BlizzSubmenu/BlizzSubmenu";

class BlizzardNavBar extends Component {
  state = {
    gamesMenu: false,
    esportsMenu: false,
    accountMenu: false
  };

  gamesMenuHandler = () => {
    if (this.state.gamesMenu) {
      this.setState({
        gamesMenu: false,
        esportsMenu: false,
        accountMenu: false
      });
    } else {
      this.setState({
        gamesMenu: true,
        esportsMenu: false,
        accountMenu: false
      });
    }
  };
  esportsMenuHandler = e => {
    e.preventDefault();
    if (this.state.esportsMenu) {
      this.setState({
        gamesMenu: false,
        esportsMenu: false,
        accountMenu: false
      });
    } else {
      this.setState({
        gamesMenu: false,
        esportsMenu: true,
        accountMenu: false
      });
    }
  };
  accountMenuHandler = e => {
    e.preventDefault();
    if (this.state.accountMenu) {
      this.setState({
        gamesMenu: false,
        esportsMenu: false,
        accountMenu: false
      });
    } else {
      this.setState({
        gamesMenu: false,
        esportsMenu: false,
        accountMenu: true
      });
    }
  };
  closeAllHandler = () => {
    this.setState({ gamesMenu: false, esportsMenu: false, accountMenu: false });
  };
  render() {
    return (
      <div className="blizz-nav">
        <div className="blizz-nav-content">
          <div className="blizz-nav-logo-links">
            <img src="/images/blizz-logo.png" alt="blizz" />
            <ul>
              <li>
                <p onClick={this.gamesMenuHandler}>
                  GAMES
                  <span className="arrow-down">
                    {this.state.gamesMenu ? "˄" : "˅"}
                  </span>
                </p>
              </li>
              <li>
                <a href="/">SHOP</a>
              </li>
              <li>
                <a href="/">NEWS</a>
              </li>
              <li>
                <p onClick={this.esportsMenuHandler}>
                  ESPORTS
                  <span className="arrow-down">
                    {this.state.esportsMenu ? "˄" : "˅"}
                  </span>
                </p>
              </li>
              <li>
                <a href="/">BLIZZCON</a>
              </li>
            </ul>
          </div>
          <ul className="blizz-nav-login">
            <li>
              <a href="/">SUPPORT</a>
            </li>
            <li>
              <p onClick={this.accountMenuHandler}>
                MY ACCOUNT
                <span className="arrow-down">
                  {this.state.accountMenu ? "˄" : "˅"}
                </span>
              </p>
            </li>
          </ul>
        </div>
        <BlizzSubmenu
          gamesMenu={this.state.gamesMenu}
          esportsMenu={this.state.esportsMenu}
          accountMenu={this.state.accountMenu}
          closeAll={this.closeAllHandler}
        />
      </div>
    );
  }
}

export default BlizzardNavBar;
