import React, { useEffect, useState, useRef } from "react";
import useStickyState from "./useStickyState";
import Titlebar from "./Titlebar/Titlebar";
import "react-reflex/styles.css";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";

const Editor = () => {
  const [markdown, setMarkdown] = useStickyState(placeholder, "placeholdermd");
  const [isNightMode, setNightMode] = useStickyState(false, "isNightMode");
  const isSmallScreenSize = useMatchMedia(800);

  return (
    <div className="editor-container">
      <Titlebar isNightMode={isNightMode} setNightMode={setNightMode} />
      <div className="panes-container">
        <ReflexContainer
          orientation={isSmallScreenSize ? "horizontal" : "vertical"}
        >
          <ReflexElement propagateDimensions={true}>
            <MarkdownPane
              title="Markdown"
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
          </ReflexElement>

          <ReflexSplitter
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderRight: "1px solid rgba(0, 0, 0, 0)",
              borderLeft: "1px solid rgba(0, 0, 0, 0)",
            }}
          />

          <ReflexElement>
            <PreviewPane
              title="Preview"
              markdown={markdown}
              isNightMode={isNightMode}
            />
          </ReflexElement>
        </ReflexContainer>
      </div>
    </div>
  );
};

const useMatchMedia = (width = 600) => {
  const [toggleChange, setToggleChange] = useState(false);
  const matchMediaRef = useRef(null);

  useEffect(() => {
    // Anything bigger than width is orange... else blue
    matchMediaRef.current = window.matchMedia(`(max-width: ${width}px)`);

    // 1. Perform initial check
    const initialMatch = matchMediaRef.current.matches;

    if (initialMatch) {
      setToggleChange(true);
    } else {
      setToggleChange(false);
    }

    // 3. Update state basked on change
    const test = (event) => {
      if (event.matches) {
        setToggleChange(true);
      } else {
        setToggleChange(false);
      }
    };

    // 2. Add listener
    matchMediaRef.current.addListener(test);

    // 5. Remove listener when component unmounts
    return () => {
      matchMediaRef.current.removeListener(test);
    };
  }, [width]);

  // 4. Return whether change happened
  return toggleChange;
};

const placeholder = `# Markline ✨

A simple markdown editor. Built for freeCodeCamp Project.  

[Github Repo](https://github.com/arslanastral/freeCodeCamp-Projects)

## Features
- Live Markdown Preview 👁
- Syntax Highlighting 🎨
- Resizable Panes 📏
- Night Mode 🌙
- Fullscreen Mode 💻
- Saves Automatically 💾

## Libraries Used
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [react-ace](https://github.com/securingsincity/react-ace)
- [react-reflex](https://github.com/leefsmp/Re-Flex)
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

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

## Images

![Minion](https://octodex.github.com/images/minion.png)
`;

export default Editor;
