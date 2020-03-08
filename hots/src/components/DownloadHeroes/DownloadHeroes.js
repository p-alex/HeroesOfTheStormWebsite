import React from "react";
import "./DownloadHeroes.css";

const downloadHeroes = props => {
  return (
    <section className="DownloadHeroes">
      <div className="DownloadHeroes-Container">
        <h3>READY TO PLAY?</h3>
        <h1>Download Heroes</h1>
        <div className="read-requirements-container">
          <img src="/images/Icons/windows.png" alt="windows" />
          <img src="/images/Icons/mac.png" alt="mac" />
          <a href="/">Read System Requirments</a>
        </div>
        <a href="/" className="play-free-download">
          PLAY FREE
        </a>
      </div>
    </section>
  );
};

export default downloadHeroes;
