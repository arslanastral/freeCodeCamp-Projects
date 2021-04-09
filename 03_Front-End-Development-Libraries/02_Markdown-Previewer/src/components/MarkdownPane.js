import React from "react";
// import styled from "styled-components";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";

// const iAceEditor = styled.AceEditor`
//   // width: 100%;
//   background: black;
//   color: white;
//   font-family: "JetBrains Mono", monospace;
//   border-radius: 5px;
//   border: none;
//   overflow: auto;
//   outline: none;

//   -webkit-box-shadow: none;
//   -moz-box-shadow: none;
//   box-shadow: none;
//   margin: 15px;
// `;

const MarkdownPane = ({ markdown, setMarkdown }) => {
  return (
    <div className="markdown-pane">
      {/* <h1 className="pane-title">{title}</h1> */}

      <AceEditor
        placeholder=""
        mode="markdown"
        theme="twilight"
        name="markdown-editor"
        onChange={(e) => {
          console.log(e);
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

      {/* <TextArea
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></TextArea> */}
    </div>
  );
};

export default MarkdownPane;
