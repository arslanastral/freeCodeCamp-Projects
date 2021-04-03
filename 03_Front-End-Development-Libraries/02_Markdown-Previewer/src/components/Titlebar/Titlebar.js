import React from "react";
import WindowControls from "./WindowControls";
import NightModeButton from "./NightModeButton";

const Titlebar = () => {
  return (
    <div className="titlebar-container">
      <WindowControls />
      <NightModeButton />
    </div>
  );
};

export default Titlebar;
