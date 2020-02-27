import React from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import Banner from "../../components/Banner/Banner";
import "./Homepage.css";
const homePage = props => {
  return (
    <React.Fragment>
      <BlizzardNavBar />
      <div className="wrapper">
        <Banner />
      </div>
    </React.Fragment>
  );
};

export default homePage;
