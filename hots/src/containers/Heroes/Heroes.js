import React, { Component } from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import HeroCard from "./HeroCard/HeroCard";
import FlipMove from "react-flip-move";
import axios from "axios";
import Loader from "../../ui/loader/loader";
import { Link } from "react-router-dom";
import "./Heroes.css";
class ChampionShowcase extends Component {
  state = {
    selectedHero: "Deathwing",
    selectedRoleFilter: "All",
    selectedUniverseFilter: "All",
    champions: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/api/champions").then((response) => {
      this.setState({ champions: response.data, loading: false });
    });
  }
  selectHeroHandler = (name, e) => {
    if (window.innerWidth > 1330) {
      e.preventDefault();
    }
    this.setState({ selectedHero: name });
  };

  selectRoleFilterHandler = (filter) => {
    if (filter !== this.state.selectedRoleFilter) {
      this.setState({ selectedRoleFilter: filter });
    } else if (filter === this.state.selectedRoleFilter) {
      this.setState({ selectedRoleFilter: "All" });
    }
  };

  selectUniverseFilterHandler = (universe) => {
    if (universe !== this.state.selectedUniverseFilter) {
      this.setState({ selectedUniverseFilter: universe });
    } else if (universe === this.state.selectedUniverseFilter) {
      this.setState({ selectedUniverseFilter: "All" });
    }
  };
  render() {
    let Champs = [...this.state.champions];
    const filterdChamps = Champs.filter((item) => {
      if (
        item.type === this.state.selectedRoleFilter &&
        item.universe === this.state.selectedUniverseFilter
      ) {
        return item;
      } else if (
        item.type === this.state.selectedRoleFilter &&
        this.state.selectedUniverseFilter === "All"
      ) {
        return item;
      } else if (
        item.universe === this.state.selectedUniverseFilter &&
        this.state.selectedRoleFilter === "All"
      ) {
        return item;
      } else if (
        this.state.selectedUniverseFilter === this.state.selectedRoleFilter
      ) {
        return item;
      }
    });
    const heroes = filterdChamps.map((champ) => {
      return (
        <li
          key={champ.name}
          onClick={(e) => this.selectHeroHandler(champ.name, e)}
        >
          {this.state.selectedHero === champ.name ? (
            <React.Fragment>
              <a
                className="heroes-stats-link"
                href={"/heroes/" + champ.name}
              ></a>
              <img
                src={"/images/HeroesProfile/" + champ.imgURL + ".png"}
                style={{
                  border: "solid white 4px",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px white",
                  filter: "brightness(1.2)",
                }}
              />
              <p style={{ fontWeight: "bold" }}>{champ.name}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <a
                className="heroes-stats-link"
                href={"/heroes/" + this.state.selectedHero}
              ></a>
              <img src={"/images/HeroesProfile/" + champ.imgURL + ".png"} />
              <p style={{ color: "white" }}>{champ.name}</p>
            </React.Fragment>
          )}
        </li>
      );
    });
    const heroCard = this.state.champions.map((card) => {
      return (
        <React.Fragment key={card.title}>
          {this.state.selectedHero === card.name ? (
            <HeroCard
              name={card.name}
              title={card.title}
              desc={card.desc}
              imgURL={card.imgURL}
              damage={card.damage}
              utility={card.utility}
              survivability={card.survivability}
              complexity={card.complexity}
              type={card.type}
              universe={card.universe}
              secondForm={card.secondForm}
            />
          ) : null}
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <BlizzardNavBar />
        <div className="wrapper">
          <NavBar />
          <section className="Heroes">
            <div className="HeroesWrapper">
              <h1 className="HeroesContainer-title">Heroes</h1>
              <div className="HeroesFilter">
                <div className="Role">
                  <p>ROLE: </p>
                  <ul className="FiltersContainer">
                    <li
                      onClick={() => this.selectRoleFilterHandler("tank")}
                      className={
                        this.state.selectedRoleFilter === "tank"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/tank.png" />
                    </li>
                    <li
                      onClick={() => this.selectRoleFilterHandler("bruiser")}
                      className={
                        this.state.selectedRoleFilter === "bruiser"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/bruiser.png" />
                    </li>
                    <li
                      onClick={() => this.selectRoleFilterHandler("healer")}
                      className={
                        this.state.selectedRoleFilter === "healer"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/healer.png" />
                    </li>
                    <li
                      onClick={() => this.selectRoleFilterHandler("support")}
                      className={
                        this.state.selectedRoleFilter === "support"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/support.png" />
                    </li>
                    <li
                      onClick={() =>
                        this.selectRoleFilterHandler("melee-assassin")
                      }
                      className={
                        this.state.selectedRoleFilter === "melee-assassin"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/melee-assassin.png" />
                    </li>
                    <li
                      onClick={() =>
                        this.selectRoleFilterHandler("ranged-assassin")
                      }
                      className={
                        this.state.selectedRoleFilter === "ranged-assassin"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/RoleIconsSmall/ranged-assassin.png" />
                    </li>
                  </ul>
                </div>
                <div className="Universe">
                  <p>UNIVERSE: </p>
                  <ul className="FiltersContainer">
                    <li
                      onClick={() =>
                        this.selectUniverseFilterHandler("Warcraft")
                      }
                      className={
                        this.state.selectedUniverseFilter === "Warcraft"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/UniverseLogo/Warcraft.png" />
                    </li>
                    <li
                      onClick={() =>
                        this.selectUniverseFilterHandler("Starcraft")
                      }
                      className={
                        this.state.selectedUniverseFilter === "Starcraft"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/UniverseLogo/Starcraft.png" />
                    </li>
                    <li
                      onClick={() => this.selectUniverseFilterHandler("Diablo")}
                      className={
                        this.state.selectedUniverseFilter === "Diablo"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/UniverseLogo/Diablo.png" />
                    </li>
                    <li
                      onClick={() =>
                        this.selectUniverseFilterHandler("Overwatch")
                      }
                      className={
                        this.state.selectedUniverseFilter === "Overwatch"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/UniverseLogo/Overwatch.png" />
                    </li>
                    <li
                      onClick={() => this.selectUniverseFilterHandler("Nexus")}
                      className={
                        this.state.selectedUniverseFilter === "Nexus"
                          ? "active-filter"
                          : null
                      }
                    >
                      <img src="/images/UniverseLogo/Nexus.png" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="HeroesContainer">
                <ul>
                  {!this.state.loading ? (
                    <FlipMove
                      className="HeroesList"
                      style={{}}
                      duration={200}
                      easing="linear"
                    >
                      {filterdChamps.length > 0 ? (
                        heroes
                      ) : (
                        <p>There are no champions matching your filters!</p>
                      )}
                    </FlipMove>
                  ) : (
                    <Loader />
                  )}
                </ul>
                {heroCard}
              </div>
            </div>
          </section>
          <DownloadHeroes />
          <Social />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default ChampionShowcase;
