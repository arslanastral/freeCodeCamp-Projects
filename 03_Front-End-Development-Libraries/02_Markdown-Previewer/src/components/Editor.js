import React, { useState } from "react";
import Titlebar from "./Titlebar/Titlebar";
import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";

const Editor = () => {
  const [markdown, setMarkdown] = useState(`# Batman`);

  return (
    <div className="editor-container">
      <Titlebar />
      <div className="panes-container">
        <MarkdownPane
          title="Markdown"
          markdown={markdown}
          setMarkdown={setMarkdown}
        />
        <PreviewPane title="Preview" markdown={markdown} />
      </div>
    </div>
  );
};

export default Editor;
