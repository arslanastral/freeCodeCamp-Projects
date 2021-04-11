import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";

const MarkdownPane = ({ markdown, setMarkdown }) => {
  return (
    <div className="markdown-pane">
      <AceEditor
        placeholder=""
        mode="markdown"
        theme="twilight"
        name="markdown-editor"
        onChange={(e) => {
          setMarkdown(e);
        }}
        fontSize={16}
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
