import React, { Component } from "react";
import "./WeeklyRotation.css";

class WeeklyRotation extends Component {
  state = {
    freeChamps: [
      { name: "Raynor" },
      { name: "Muradin" },
      { name: "Sonya" },
      { name: "Nazeebo" },
      { name: "Uther" },
      { name: "Jaina" },
      { name: "Varian" },
      { name: "Alexstrasza" },
      { name: "Greymane" },
      { name: "Leoric" },
      { name: "Deathwing", type: "Bruiser" },
      { name: "Yrel" },
      { name: "Qhyra", type: "Melee Assassin" },
      { name: "Tassador" }
    ]
  };
  render() {
    const freeChamps = this.state.freeChamps.map(champ => {
      return (
        <li>
          <a href={"/heroes/" + champ.name}>
            <img
              src={"/images/HeroesProfile/" + champ.name + ".png"}
              alt={champ.name}
            />
            <p>{champ.name}</p>
          </a>
        </li>
      );
    });
    return (
      <section className="WeeklyRotation">
        <div className="weekly-rotation-container">
          <div className="play-as-latest-champs">
            <div className="play-as">
              <h3>PLAY AS</h3>
              <h1>Fabled Blizzard Heroes</h1>
              <p className="play-as-paragraph">
                With bold, diverse abilities and forceful personalities, each
                hero can upend a match – especially if mastered by a determined
                player.
              </p>
              <a href="/heroes">SEE ALL HEROES</a>
            </div>
            <div className="latest-champs">
              <p style={{ textAlign: "left" }}>LATEST</p>
              <div className="latest-champs-img">
                <div className="champ1">
                  <img src="/images/HeroesProfile/Deathwing.png"></img>
                  <p>Deathwing</p>
                  <small>Bruiser</small>
                </div>
                <div className="champ2">
                  <img src="/images/HeroesProfile/Qhyra.png"></img>
                  <p>Qhira</p>
                  <small>Melee Assassin</small>
                </div>
              </div>
            </div>
          </div>
          <div className="free-champs-rotation">
            <p>WEEKLY ROTATION</p>
            <ul className="champs">{freeChamps}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default WeeklyRotation;
