import React from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

const BlankCodeBlock = ({ value }) => {
  return <pre className="language-">{value || ""}</pre>;
};

const CodeBlock = ({ language, value }) => {
  if (!language || !Prism.languages[language] || !value)
    return <BlankCodeBlock value={value} />;

  var html = Prism.highlight(value, Prism.languages[language]);
  var cls = `language-${language}`;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
};

const PreviewPane = ({ markdown, isNightMode }) => {
  React.useEffect(() => {
    wasNightMode();
  });

  const wasNightMode = () => {
    if (isNightMode) {
      document
        .getElementsByClassName("markdown-body")[0]
        .setAttribute("id", "dark-mode");
      document
        .getElementsByClassName("preview-pane")[0]
        .setAttribute("id", "dark-mode");
      document.body.setAttribute("id", "dark-mode");
    }
  };

  return (
    <div className="preview-pane">
      <div className="markdown-body">
        <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }} />
      </div>
    </div>
  );
};

export default PreviewPane;
