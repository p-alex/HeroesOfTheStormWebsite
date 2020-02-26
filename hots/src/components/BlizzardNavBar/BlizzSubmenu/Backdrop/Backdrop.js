import React from "react";
import "./Backdrop.css";

const backDrop = props => (
  <div className="backdrop" onClick={props.closeAll}></div>
);

export default backDrop;
