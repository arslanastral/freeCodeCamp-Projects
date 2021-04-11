import React, { useState } from "react";
import Titlebar from "./Titlebar/Titlebar";
import PanelGroup from "react-panelgroup";
import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";

const Editor = () => {
  const [markdown, setMarkdown] = useState(placeholder);
  const [panelSize, setPanelSize] = useState([
    { size: 600, minSize: 0, resize: "dynamic" },
    { size: 500, minSize: 0, resize: "dynamic" },
  ]);

  return (
    <div className="editor-container">
      <Titlebar />
      <div className="panes-container">
        <PanelGroup
          // direction="column"
          onUpdate={(w) => setPanelSize(w)}
          panelWidths={panelSize}
        >
          <MarkdownPane
            title="Markdown"
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
          <PreviewPane title="Preview" markdown={markdown} />
        </PanelGroup>
      </div>
    </div>
  );
};

const placeholder = `# Markline ✨

A simple markdown editor.

## Features
- Live Markdown Preview 👁
- Syntax Highlighting 🎨
- Fully Resizable Panes 📏
- Night Mode 🌙

## Libraries Used
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [react-ace](https://github.com/securingsincity/react-ace)
- [react-panelgroup](https://github.com/DanFessler/react-panelgroup)
- [use-dark-mode](https://github.com/donavon/use-dark-mode)
- [prism.js](https://prismjs.com/)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

### Syntax highlighting


\`\`\` js
var foo = function (bar) {
  return bar++;
};
console.log(foo(5));
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;

export default Editor;
