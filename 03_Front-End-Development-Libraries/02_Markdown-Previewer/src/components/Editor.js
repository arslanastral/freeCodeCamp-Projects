import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";

const Editor = () => {
  return (
    <div className="editor-container">
      <Titlebar />
      <div className="panes-container">
        <MarkdownPane />
        <PreviewPane />
      </div>
    </div>
  );
};

export default Editor;
