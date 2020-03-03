import React from "react";
import "./Battlegrounds.css";

const battlegrounds = props => {
  return (
    <section className="battlegrounds">
      <div className="battlegrounds-container">
        <div className="battlegrounds-explore">
          <h3>EXPLORE</h3>
          <h1>Supercharged Battlegrounds</h1>
          <p>
            Unlike other MOBAs, Heroes of the Storm features a panoply of
            dynamic Battlegrounds, each with unique quests and objectives.
          </p>
          <a href="/">SEE ALL BATTLEGROUNDS</a>
        </div>
        <div className="battlegrounds-images"></div>
      </div>
    </section>
  );
};

export default battlegrounds;
