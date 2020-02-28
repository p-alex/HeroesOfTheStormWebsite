import React, { Component } from "react";
import "./BlizzSubmenu.css";
import Backdrop from "./Backdrop/Backdrop";

class BlizzSubmenu extends Component {
  state = {
    blizz: [
      { name: "Overwatch® 2", imgName: "overwatch-logo.png" },
      { name: "Overwatch®", imgName: "overwatch-logo1.png" },
      { name: "World Of Warcraft®", imgName: "wow-logo.png" },
      { name: "Hearthstone®", imgName: "hs-logo.png" },
      { name: "Heroes Of The Storm™", imgName: "hots-logo.png" },
      { name: "Warcraft® 3:Reforged™", imgName: "w3-logo.png" },
      { name: "Diablo® 4", imgName: "diablo4-logo.png" },
      { name: "Diablo® Immortal", imgName: "diablo-logo.png" },
      { name: "Diablo® 3", imgName: "diablo3-logo.png" },
      { name: "StarCraft® 2", imgName: "starcraft2-logo.png" },
      { name: "Starcraft® Remastered", imgName: "starcraft-logo.png" }
    ],
    activision: [
      { name: "Call of Duty®: Modern Warfare®", imgName: "codw-logo.png" },
      { name: "Call of Duty®: Black Ops 4", imgName: "cod-logo.png" }
    ]
  };
  render() {
    const blizzGamesList = this.state.blizz.map(game => {
      return (
        <li>
          <a href="/">
            <img src={"/images/logos/" + game.imgName} />
            <small>{game.name}</small>
          </a>
        </li>
      );
    });
    const activisionGamesList = this.state.activision.map(game => {
      return (
        <li>
          <a href="/">
            <img src={"/images/logos/" + game.imgName} />
            <small>{game.name}</small>
          </a>
        </li>
      );
    });
    return (
      <React.Fragment>
        {this.props.gamesMenu ? (
          <div className="blizzSubmenu">
            <div className="blizzSubmenu-container">
              <div className="games">
                <p>BLIZZARD</p>
                <ul>{blizzGamesList}</ul>
              </div>
              <div className="games">
                <p>ACTIVISION</p>
                <ul>{activisionGamesList}</ul>
              </div>
            </div>
            <div className="blizzSubmenu-bottom">
              <ul>
                <li>
                  <a href="">More Games</a>
                </li>
                <li>
                  <a href="">Battle.net App</a>
                </li>
                <li>
                  <a href="">Downloads</a>
                </li>
                <li>
                  <a href="">Game Forums</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        {this.props.esportsMenu ? (
          <div className="blizzSubmenu">
            <div className="blizzSubmenu-container">
              <ul className="esports-list">
                <li>
                  <a href="/">
                    <img src="/images/logos/e-overwatch.png" />
                    <p>Overwatch League</p>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/logos/e-overwatch-cup.png" />
                    <p>Overwatch World Cup</p>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/logos/e-hs.png" />
                    <p>Hearthstone Masters</p>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/logos/e-starcraft.png" />
                    <p>Starcraft 2 WCS</p>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/logos/e-wow.png" />
                    <p>World of Warcraft Arena World Championship</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="blizzSubmenu-bottom">
              <ul>
                <li>
                  <a href="">More Competitions</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        {this.props.accountMenu ? (
          <div className="accountMenu">
            <a href="/" className="accountMenu-logIn">
              Log In
            </a>
            <a href="/" className="accountMenu-settings">
              Account Settings
            </a>
            <a href="/" className="accountMenu-create">
              Create a Free Account
            </a>
          </div>
        ) : null}
        {this.props.gamesMenu ||
        this.props.esportsMenu ||
        this.props.accountMenu ? (
          <Backdrop closeAll={this.props.closeAll} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default BlizzSubmenu;
