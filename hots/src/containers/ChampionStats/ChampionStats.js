import React, { Component } from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import "./ChampionStats.css";
import Loader from "../../ui/loader/loader";
import axios from "axios";

class ChampionStats extends Component {
  state = {
    champions: [],
    loader: false,
  };
  componentDidMount() {
    this.setState({ loader: true });
    axios.get("/api/champions").then((response) => {
      const champion = response.data.filter((champ) => {
        if (champ.name === this.props.match.params.heroName) {
          return champ;
        }
      });
      console.log(this.state.champions);
      this.setState({ champions: champion, loader: false });
    });
  }
  render() {
    let stats = null;
    if (!this.state.loader) {
      stats = this.state.champions.map((stat) => {
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
    }

    return (
      <React.Fragment>
        <BlizzardNavBar />
        <NavBar />
        <section className="ChampionStats">
          <div className="ChampionStatsContainer">
            {this.state.champions.map((champ) => {
              if (
                champ.name.slice(0, 4) ===
                this.props.match.params.heroName.slice(0, 4)
              ) {
                return (
                  <img src={"/images/HeroesCards/" + champ.imgURL + ".jpg"} />
                );
              }
            })}

            <div className="StatsList">
              {!this.state.loader ? (
                <React.Fragment>{stats}</React.Fragment>
              ) : (
                <Loader />
              )}
            </div>
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
