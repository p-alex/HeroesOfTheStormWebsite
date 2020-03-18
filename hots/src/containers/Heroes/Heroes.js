import React, { Component } from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import HeroCard from "./HeroCard/HeroCard";
import FlipMove from "react-flip-move";
import "./Heroes.css";
class ChampionShowcase extends Component {
  state = {
    selectedHero: "Deathwing",
    selectedRoleFilter: "All",
    selectedUniverseFilter: "All",
    champions: [
      {
        name: "Deathwing",
        title: "THE DESTROYER",
        desc:
          "One of the five Dragon Aspects and the leader of the Black Dragonflight, Neltharion the Earth-Warder was once a protector of Azeroth. During the War of the Ancients, he was driven mad by the Old Gods and turned against his former allies. Now known as Deathwing the Destroyer, he has found his way to the Nexus where his limitless rage drives his ultimate goal of widespread destruction and the eventual end of all living things.",
        imgURL: "Deathwing.jpg",
        damage: "70%",
        utility: "70%",
        survivability: "100%",
        complexity: "80%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Qhyra",
        title: "REALMLESS BOUNTY HUNTER",
        desc:
          "A sworn knight and holder of a singularity shard, Qhira's only desire is to seek out others who may have escaped the destruction of her doomed home realm, Iresia. While she searches, she gets by as a bounty hunter – a job she loathes, despite her exceptional skill.",
        imgURL: "Qhyra.jpg",
        damage: "80%",
        utility: "60%",
        survivability: "70%",
        complexity: "60%",
        type: "melee assassin",
        universe: "Nexus",
        secondForm: false
      },
      {
        name: "Anduin",
        title: "KING OF STORMWIND",
        desc:
          "As a young man, Anduin sought peace as a priest of the Holy Light and an envoy of the Alliance. After his father, Varian, fell to the Burning Legion, Anduin took up the crown as High King of the Alliance. He soon learned that peace must be fought for, even in the Nexus.",
        imgURL: "Anduin.jpg",
        damage: "20%",
        utility: "70%",
        survivability: "40%",
        complexity: "40%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Yrel",
        title: "LIGHT OF HOPE",
        desc:
          "After traveling to an Alternate Draenor, the forces of Azeroth saved the acolyte Yrel from the Iron Horde. With their aid, she rose to the rank of Exarch and fought back the demonic invasion of her world. Now, she finds herself where time, space, and dimensions converge: the Nexus.",
        imgURL: "Yrel.jpg",
        damage: "50%",
        utility: "40%",
        survivability: "100%",
        complexity: "50%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Maiev",
        title: "THE WARDEN",
        desc:
          "Maiev Shadowsong stood watch over the imprisoned Betrayer for ten thousand years, and hunted him relentlessly after he was released. Some say she's determined; others say she's obsessed. Either way, she will stop at nothing to ensure the security of her world.",
        imgURL: "Maiev.jpg",
        damage: "60%",
        utility: "50%",
        survivability: "70%",
        complexity: "70%",
        type: "melee assasin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Alexstrasza",
        title: "THE LIFE-BINDER",
        desc:
          "Alexstrasza, the queen of dragons, was empowered by the titans to be the guardian of all life on Azeroth. She has aided mortals time and again, even at great personal cost. Now, she soars across the Nexus, protecting life wherever she finds it.",
        imgURL: "Alexstrasza.jpg",
        damage: "30%",
        utility: "60%",
        survivability: "40%",
        complexity: "60%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Varian",
        title: "HIGH KING OF THE ALLIANCE",
        desc:
          "Few would have expected that the gladiator known only as Lo'Gosh was in truth the missing ruler of Stormwind, Varian Wrynn. Now the High King of the Alliance, his every action shapes the destiny of Azeroth itself.",
        imgURL: "Varian.jpg",
        damage: "60%",
        utility: "70%",
        survivability: "60%",
        complexity: "60%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Greymane",
        title: "LORD OF THE WORGEN",
        desc:
          "Like most Gilneans, Genn Greymane is afflicted by the worgen curse. Though he feels at fault for his people’s ill fate, he has embraced his inner beast without giving in to its feral nature. Now he leads his pack as both their alpha and their king.",
        imgURL: "Greymane.jpg",
        damage: "90%",
        utility: "30%",
        survivability: "40%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: true
      },
      {
        name: "Leoric",
        title: "THE SKELETON KING",
        desc:
          "Madness. Betrayal. Death. These are the legacy of the Black King Leoric's reign. Driven to madness by the spirit of Diablo, Leoric brought untold suffering on his kingdom. Even after his death there was no release for the Skeleton King.",
        imgURL: "Leoric.jpg",
        damage: "40%",
        utility: "50%",
        survivability: "80%",
        complexity: "60%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Sylvanas",
        title: "THE BANSHEE QUEEN",
        desc:
          "Sylvanas Windrunner was not always the Dark Lady of the Forsaken. In another life, she was the Ranger-General of Silvermoon. But that was before the Death Knight Arthas slew her and her people and raised her as the first Banshee.",
        imgURL: "Sylvanas.jpg",
        damage: "90%",
        utility: "70%",
        survivability: "30%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Jaina",
        title: "ARCHMAGE",
        desc:
          "Once the apprentice of the Archmage Antonidas, Jaina Proudmoore led the survivors of Lordaeron to Kalimdor and founded the city of Theramore. Now, she serves the Alliance as a powerful voice fighting for reason and diplomacy.",
        imgURL: "Jaina.jpg",
        damage: "100%",
        utility: "40%",
        survivability: "20%",
        complexity: "40%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Muradin",
        title: "MOUNTAIN KING",
        desc:
          "Once a mentor to Prince Arthas, Muradin was unable to prevent his corruption. After recovering from a mild case of amnesia, he is now the leader of the Bronzebeard clan after the 'diamond-ization' of his brother King Magni.",
        imgURL: "Muradin.jpg",
        damage: "50%",
        utility: "50%",
        survivability: "90%",
        complexity: "40%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Raynor",
        title: "RENEGADE COMMANDER",
        desc:
          "Ex-Confederate Marshal James Raynor has stood against whatever the universe can throw at him and survived. He stands as a beacon of hope among enigmatic aliens and monsters, fighting for justice in a cold uncaring universe.",
        imgURL: "Raynor.jpg",
        damage: "90%",
        utility: "10%",
        survivability: "60%",
        complexity: "30%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Sonya",
        title: "WANDERING BARBARIAN",
        desc:
          "From the frozen Dreadlands of the north come the mighty Barbarian warriors. After surviving the destruction of her home and death of her tribe, Sonya wanders Sanctuary in search of battle and a better life for her people.",
        imgURL: "Sonya.jpg",
        damage: "70%",
        utility: "50%",
        survivability: "60%",
        complexity: "50%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Tyrael",
        title: "ARCHANGEL OF JUSTICE",
        desc:
          "Among the angels it is the Archangel of Justice Tyrael who is humanity's greatest defender. Wielding his sword El'druin against the Burning Hells, the Prime Evils would have enslaved humanity long ago if Tyrael had not intervened.",
        imgURL: "Tyrael.jpg",
        damage: "60%",
        utility: "60%",
        survivability: "80%",
        complexity: "50%",
        type: "tank",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Uther",
        title: "THE LIGHTBRINGER",
        desc:
          "The first paladin and founder of the Order of the Silver Hand, Uther the Lightbringer is a faithful servant of the Light. Dispensing justice with the swing of his hammer, Uther is a bastion of truth and an unflinching symbol of the Alliance.",
        imgURL: "Uther.jpg",
        damage: "30%",
        utility: "90%",
        survivability: "70%",
        complexity: "20%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Tassador",
        title: "SAVIOR OF THE TEMPLAR",
        desc:
          "An Executor without equal, Tassadar has fought tirelessly to purify the Koprulu sector of zerg infestation. Only now, after learning to wield the power of the void, is Tassadar finally ready to face the Overmind and its all-consuming Swarm.",
        imgURL: "Tassador.jpg",
        damage: "60%",
        utility: "70%",
        survivability: "70%",
        complexity: "40%",
        type: "support",
        universe: "Starcraft",
        secondForm: false
      }
    ]
  };
  selectHeroHandler = (name, e) => {
    e.preventDefault();
    this.setState({ selectedHero: name });
  };

  selectRoleFilterHandler = filter => {
    this.setState({ selectedRoleFilter: filter });
  };

  selectUniverseFilterHandler = universe => {
    this.setState({ selectedUniverseFilter: universe });
  };
  render() {
    let Champs = [...this.state.champions];
    const filterdChamps = Champs.filter(item => {
      if (
        this.state.selectedRoleFilter !== "All" &&
        this.state.selectedUniverseFilter !== "All"
      ) {
        return (
          item.type === this.state.selectedRoleFilter &&
          item.universe === this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter === "All" &&
        this.state.selectedUniverseFilter !== "All"
      ) {
        return (
          item.type !== this.state.selectedRoleFilter &&
          item.universe === this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter !== "All" &&
        this.state.selectedUniverseFilter === "All"
      ) {
        return (
          item.type === this.state.selectedRoleFilter &&
          item.universe !== this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter === "All" &&
        this.state.selectedUniverseFilter === "All"
      ) {
        return (
          item.type !== this.state.selectedRoleFilter &&
          item.universe !== this.state.selectedUniverseFilter
        );
      }
    });
    console.log(
      filterdChamps,
      this.state.selectedRoleFilter,
      this.state.selectedUniverseFilter
    );
    const heroes = filterdChamps.map(champ => {
      return (
        <li
          key={champ.name}
          onClick={e => this.selectHeroHandler(champ.name, e)}
        >
          {this.state.selectedHero === champ.name ? (
            <React.Fragment>
              <img
                src={"/images/HeroesProfile/" + champ.name + ".png"}
                style={{
                  border: "solid white 4px",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px white",
                  filter: "brightness(1.2)"
                }}
              />
              <p style={{ fontWeight: "bold" }}>{champ.name}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src={"/images/HeroesProfile/" + champ.name + ".png"} />
              <p style={{ color: "white" }}>{champ.name}</p>
            </React.Fragment>
          )}
        </li>
      );
    });
    const heroCard = this.state.champions.map(card => {
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
            <div className="HeroesContainer">
              <div className="HeroesFilter">
                <div className="Role">
                  <p style={{ marginRight: "20px" }}>Role: </p>
                  <ul className="Roles">
                    <li
                      style={
                        this.state.selectedRoleFilter === "All"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("All")}
                    >
                      All
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "tank"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("tank")}
                    >
                      Tank
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "bruiser"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("bruiser")}
                    >
                      Bruiser
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "support"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("support")}
                    >
                      Support
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "healer"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("healer")}
                    >
                      Healer
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "ranged assassin"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectRoleFilterHandler("ranged assassin")
                      }
                    >
                      Ranged Assassin
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "melee assassin"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectRoleFilterHandler("melee assassin")
                      }
                    >
                      Melee Assassin
                    </li>
                  </ul>
                </div>
                <div className="Role">
                  <p style={{ marginRight: "20px" }}>Universe: </p>
                  <ul className="Universe">
                    <li
                      style={
                        this.state.selectedUniverseFilter === "All"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("All")}
                    >
                      All
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Warcraft"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectUniverseFilterHandler("Warcraft")
                      }
                    >
                      Warcraft
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Starcraft"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectUniverseFilterHandler("Starcraft")
                      }
                    >
                      Starcraft
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Diablo"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("Diablo")}
                    >
                      Diablo
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Nexus"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("Nexus")}
                    >
                      Nexus
                    </li>
                  </ul>
                </div>
              </div>

              <h1 className="HeroesContainer-title">Heroes</h1>
              <ul>
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
              </ul>
              {heroCard}
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
