import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

function BlankCodeBlock({ value }) {
  return <pre className="language-">{value || ""}</pre>;
}

function CodeBlock({ language, value }) {
  // 1. no language was typed
  // or 2. language doesnt exist
  if (!language || !Prism.languages[language] || !value)
    return <BlankCodeBlock value={value} />;

  var html = Prism.highlight(value, Prism.languages[language]);
  var cls = "language-" + language;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

const Preview = styled.div`
  background: white;
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-radius: 8px;
  margin: 15px;

  pre {
    background: #333;
    font-family: "JetBrains Mono", monospace;
    border-radius: 8px;
    margin: 10px;
    color: #eee;
    padding: 30px;
  }
`;

const PreviewPane = ({ title, markdown }) => {
  return (
    <div className="preview-pane">
      <h1 className="pane-title">{title}</h1>
      <Preview>
        <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }} />
      </Preview>
    </div>
  );
};

export default PreviewPane;
