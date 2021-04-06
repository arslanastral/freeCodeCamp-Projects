import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  // width: 100%;
  background: black;
  color: white;
  font-family: "Inter", sans-serif;
  border-radius: 5px;
  margin: 15px;
`;

const MarkdownPane = ({ title, markdown, setMarkdown }) => {
  return (
    <div className="markdown-pane">
      <h1 className="pane-title">{title}</h1>
      <TextArea
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></TextArea>
    </div>
  );
};

export default MarkdownPane;
