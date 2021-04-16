import React from "react";
import useStickyState from "../useStickyState";

const WindowControls = () => {
  const [isFullScreenMode, setFullScreenMode] = useStickyState(
    false,
    "isFullScreenMode"
  );

  React.useEffect(() => {
    wasFullScreenMode();
  });

  const wasFullScreenMode = () => {
    if (isFullScreenMode) {
      document
        .getElementsByClassName("editor-container")[0]
        .setAttribute("id", "fullscreen-mode");
      document
        .getElementsByClassName("titlebar-container")[0]
        .setAttribute("id", "remove-border-radius");
    }
  };

  const fullScreenMode = () => {
    if (isFullScreenMode) {
      document
        .getElementsByClassName("editor-container")[0]
        .removeAttribute("id", "fullscreen-mode");
      document
        .getElementsByClassName("titlebar-container")[0]
        .removeAttribute("id", "remove-border-radius");
      setFullScreenMode(!isFullScreenMode);
    } else {
      document
        .getElementsByClassName("editor-container")[0]
        .setAttribute("id", "fullscreen-mode");
      document
        .getElementsByClassName("titlebar-container")[0]
        .setAttribute("id", "remove-border-radius");
      setFullScreenMode(!isFullScreenMode);
    }
  };

  return (
    <div>
      <div className="window-controls">
        <div className="btn btn1"></div>
        <label htmlFor="screen-mode">
          <div className="btn btn2">
            <input
              className="max-button"
              type="checkbox"
              name="screen-mode"
              onChange={fullScreenMode}
            />
          </div>
        </label>
        <div className="btn btn3"></div>
      </div>
      {/* <div>
        <Switch
          onColor="#0000FF"
          checked={isFullScreenMode}
          onChange={fullScreenMode}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div> */}
    </div>
  );
};

export default WindowControls;
