import React, { Component } from "react";
import "./NavBarMobile.css";
import NavBarMobileBackdrop from "./NavBarMobileBackdrop/NavBarMobileBackdrop";

class NavBarMobile extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isOpen ? (
          <React.Fragment>
            <NavBarMobileBackdrop close={this.props.close} />
            <div className="navBarMobile">
              <div className="closeNavBarMobile" onClick={this.props.close}>
                <span>X</span>
              </div>
              <img src="/images/Logos/hots-logo-big.png" />
              <ul>
                <li>
                  <a href="/" className="link-active">
                    GAME
                  </a>
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
