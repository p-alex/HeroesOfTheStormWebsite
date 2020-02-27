import React from "react";

const videoOne = props => {
  return (
    <video autoPlay muted loop>
      <source src="/video/deathwing.mp4"></source>
    </video>
  );
};

export default videoOne;
