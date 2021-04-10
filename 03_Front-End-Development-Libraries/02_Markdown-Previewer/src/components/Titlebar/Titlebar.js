import React from "react";
import WindowControls from "./WindowControls";
import NightMode from "./NightMode";

const Titlebar = () => {
  return (
    <div className="titlebar-container">
      <WindowControls />
      <NightMode />
    </div>
  );
};

export default Titlebar;
