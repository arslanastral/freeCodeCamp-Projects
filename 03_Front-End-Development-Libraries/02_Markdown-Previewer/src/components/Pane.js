import React from "react";

const Pane = ({ className, title, textArea }) => {
  return (
    <div className={className}>
      <h1 className="pane-title">{title}</h1>
      {textArea}
    </div>
  );
};

export default Pane;
