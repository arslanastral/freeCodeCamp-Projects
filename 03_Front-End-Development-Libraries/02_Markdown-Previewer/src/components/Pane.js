import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea``;

const Pane = ({ className, title }) => {
  return (
    <div className={className}>
      <h1 className="pane-title">{title}</h1>
      <TextArea />
    </div>
  );
};

export default Pane;
