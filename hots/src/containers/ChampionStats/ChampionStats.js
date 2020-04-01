import React, { Component } from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import "./ChampionStats.css";
import axios from "axios";

class ChampionStats extends Component {
  state = {
    champions: []
  };
  componentDidMount() {
    axios.get("/champions").then(response => {
      this.setState({ champions: response.data });
    });
  }
  render() {
    const stats = this.state.champions.map(stat => {
      if (stat.name === this.props.match.params.heroName) {
        return (
          <React.Fragment>
            <div className="HeroStats-name-title-universe-container">
              <img src={"/images/UniverseLogo/" + stat.universe + ".png"} />
              <div className="HeroStats-name-title">
                <h1>{stat.name}</h1>
                <h3>{stat.title}</h3>
              </div>
            </div>

            <p style={{ width: "100%", margin: "20px 0" }}>{stat.desc}</p>
            <div className="HeroStatsContainer">
              <div className="HeroStats">
                <div className="damage stat">
                  <img src="/images/StatIcons/damage.png" />
                  <p>Damage:</p>
                  <div className="BarContainer">
                    <div
                      className="damageBar bar"
                      style={{ width: stat.damage }}
                    ></div>
                  </div>
                </div>
                <div className="utility stat">
                  <img src="/images/StatIcons/utility.png" />
                  <p>Utility:</p>
                  <div className="BarContainer">
                    <div
                      className="utilityBar bar"
                      style={{ width: stat.utility }}
                    ></div>
                  </div>
                </div>
                <div className="survivability stat">
                  <img src="/images/StatIcons/survivability.png" />
                  <p>Survivability:</p>
                  <div className="BarContainer">
                    <div
                      className="survivabilityBar bar"
                      style={{ width: stat.survivability }}
                    ></div>
                  </div>
                </div>
                <div className="complexity stat">
                  <img src="/images/StatIcons/complexity.png" />
                  <p>Complexity:</p>
                  <div className="BarContainer">
                    <div
                      className="complexityBar bar"
                      style={{ width: stat.complexity }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="role">
                <img src={"/images/RoleIcons/" + stat.type + ".png"} />
                <p>{stat.type}</p>
              </div>
            </div>
          </React.Fragment>
        );
      }
    });
    return (
      <React.Fragment>
        <BlizzardNavBar />
        <NavBar />
        <section className="ChampionStats">
          <div className="ChampionStatsContainer">
            {this.state.champions.map(champ => {
              if (
                champ.name.slice(0, 4) ===
                this.props.match.params.heroName.slice(0, 4)
              ) {
                return (
                  <img src={"/images/HeroesCards/" + champ.imgURL + ".jpg"} />
                );
              }
            })}

            <div className="StatsList">{stats}</div>
          </div>
        </section>
        <DownloadHeroes />
        <Social />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ChampionStats;
