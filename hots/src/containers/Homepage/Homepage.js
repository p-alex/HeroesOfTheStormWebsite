import React from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import Banner from "../../components/Banner/Banner";
import WeeklyRotation from "../../components/WeeklyRotation/WeeklyRotation";
import Battlegrounds from "../../components/Battlegrounds/Battlegrounds";
import "./Homepage.css";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
const homePage = props => {
  return (
    <React.Fragment>
      <BlizzardNavBar />
      <div className="wrapper">
        <NavBar />
        <Banner />

        <WeeklyRotation />
        <Battlegrounds />
        <DownloadHeroes />
        <Social />
        <Footer />
      </div>
      <Route path="/champions" component="" />
    </React.Fragment>
  );
};

export default homePage;
