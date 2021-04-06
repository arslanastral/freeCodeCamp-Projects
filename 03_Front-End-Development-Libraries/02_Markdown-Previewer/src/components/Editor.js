import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import Pane from "./Pane";

import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  background: black;
  color: white;
  font-family: "Inter", sans-serif;
`;

const Editor = () => {
  return (
    <div className="editor-container">
      <Titlebar />
      <div className="panes-container">
        <Pane
          className="markdown-pane"
          title="Markdown"
          textArea={<TextArea />}
        ></Pane>
        <Pane className="preview-pane" title="Preview" />
      </div>
    </div>
  );
};

export default Editor;
