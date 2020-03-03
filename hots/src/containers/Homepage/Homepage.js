import React from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import Banner from "../../components/Banner/Banner";
import WeeklyRotation from "../../components/WeeklyRotation/WeeklyRotation";
import Battlegrounds from "../../components/Battlegrounds/Battlegrounds";
import "./Homepage.css";
const homePage = props => {
  return (
    <React.Fragment>
      <BlizzardNavBar />
      <div className="wrapper">
        <Banner />
        <WeeklyRotation />
        <Battlegrounds />
      </div>
    </React.Fragment>
  );
};

export default homePage;
