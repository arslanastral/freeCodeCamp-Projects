import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import Pane from "./Pane";

const Editor = () => {
  return (
    <div className="editor-container">
      <Titlebar />
      <div className="panes-container">
        <Pane className="markdown-pane" title="Markdown" />
        <Pane className="preview-pane" title="Preview" />
      </div>
    </div>
  );
};

export default Editor;
