import React, { Component } from "react";
import "./BlizzardMobileSubmenu.css";

class BlizzardMobileSubmenu extends Component {
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
    ],
    esports: [
      { name: "Overwatch League", imgName: "e-overwatch.png" },
      { name: "Overwatch World Cup", imgName: "e-overwatch-cup.png" },
      { name: "Hearthstone Masters", imgName: "e-hs.png" },
      { name: "Starcraft 2 WCS", imgName: "e-starcraft.png" },
      {
        name: "World of Warcraft Arena World Championship",
        imgName: "e-wow.png"
      }
    ]
  };
  render() {
    const blizzGamesList = this.state.blizz.map(game => {
      return (
        <li>
          <a href="/">
            <img src={"/images/Logos/" + game.imgName} />
            <small>{game.name}</small>
          </a>
        </li>
      );
    });
    const activisionGamesList = this.state.activision.map(game => {
      return (
        <li>
          <a href="/">
            <img src={"/images/Logos/" + game.imgName} />
            <small>{game.name}</small>
          </a>
        </li>
      );
    });
    const esportsList = this.state.esports.map(e => {
      return (
        <li>
          <a href="/">
            <img src={"/images/Logos/" + e.imgName} />
            <small>{e.name}</small>
          </a>
        </li>
      );
    });
    return (
      <React.Fragment>
        {this.props.gamesMenu ? (
          <div className="blizzMobileToggleContainer">
            <p>BLIZZARD</p>
            <ul>{blizzGamesList}</ul>
            <p>ACTIVISION</p>
            <ul>{activisionGamesList}</ul>
            <a href="/" style={{ borderTop: "solid 1px #0e86ca" }}>
              More Games
            </a>
            <a href="/">Battle.net App</a>
            <a href="/">Downloads</a>
            <a href="/">Game Forums</a>
          </div>
        ) : null}
        {this.props.esportsMenu ? (
          <div className="blizzMobileToggleContainer">
            <ul>{esportsList}</ul>
            <a href="/" style={{ borderTop: "solid 1px #0e86ca" }}>
              More Competitions
            </a>
            <a href="/">Resources</a>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default BlizzardMobileSubmenu;
