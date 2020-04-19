import React, { Component } from "react";
import "./HeroCard.css";
class HeroCard extends Component {
  state = {
    difficulty: "",
  };

  componentDidMount() {
    if (
      this.props.complexity === "10%" ||
      this.props.complexity === "20%" ||
      this.props.complexity === "30%" ||
      this.props.complexity === "40%"
    ) {
      this.setState({ difficulty: "Easy" });
    } else if (
      this.props.complexity === "50%" ||
      this.props.complexity === "60%" ||
      this.props.complexity === "70%"
    ) {
      this.setState({ difficulty: "Medium" });
    } else if (
      this.props.complexity === "80%" ||
      this.props.complexity === "90%" ||
      this.props.complexity === "100%"
    ) {
      this.setState({ difficulty: "Hard" });
    }
  }
  render() {
    return (
      <div className="HeroCard-container">
        <div className="HeroCard">
          <a href={"/heroes/" + this.props.name}>
            <div
              className="HeroCard-background"
              style={{
                backgroundImage:
                  "url(/images/HeroesCards/" + `${this.props.imgURL}` + ".jpg)",
              }}
            ></div>
          </a>

          <div className="HeroCard-name">
            <h1>{this.props.name}</h1>
          </div>
          <div className="panels-container">
            <div className="HeroCard-panel">
              <p>Role</p>
              <p className="panel-stat">{this.props.type}</p>
            </div>
            <div className="HeroCard-panel">
              <p>Difficulty</p>
              <p className="panel-stat">{this.state.difficulty}</p>
            </div>
            <div className="HeroCard-panel">
              <p>Universe</p>
              <p className="panel-stat">{this.props.universe}</p>
            </div>
          </div>
          <div className="HeroCard-learn">
            <a href={"/heroes/" + this.props.name}>LEARN MORE</a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCard;
