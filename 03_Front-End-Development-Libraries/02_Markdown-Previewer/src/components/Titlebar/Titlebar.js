import React from "react";
import WindowControls from "./WindowControls";
import NightMode from "./NightMode";

const Titlebar = ({ isNightMode, setNightMode }) => {
  return (
    <div className="titlebar-container">
      <WindowControls />
      <NightMode isNightMode={isNightMode} setNightMode={setNightMode} />
    </div>
  );
};

export default Titlebar;
