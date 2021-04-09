import React from "react";
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

const PreviewPane = ({ markdown }) => {
  return (
    <div className="preview-pane">
      {/* <h1 className="pane-title">{title}</h1> */}
      <div className="markdown-body">
        <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }} />
      </div>
    </div>
  );
};

export default PreviewPane;
