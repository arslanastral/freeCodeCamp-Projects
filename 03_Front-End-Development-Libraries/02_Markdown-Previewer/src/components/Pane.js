import React from "react";

const Pane = ({ className, title }) => {
  return (
    <div className={className}>
      <h1 className="pane-title">{title}</h1>
    </div>
  );
};

export default Pane;
