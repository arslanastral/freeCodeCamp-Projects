import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";

const MarkdownPane = ({ markdown, setMarkdown }) => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  });
  return (
    <div className="markdown-pane">
      <AceEditor
        placeholder=""
        mode="markdown"
        theme="twilight"
        name="editor"
        onChange={(e) => {
          setMarkdown(e);
        }}
        fontSize={17}
        width="100%"
        height="100%"
        style={{ background: "black", fontFamily: "JetBrains Mono" }}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={markdown}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default MarkdownPane;
