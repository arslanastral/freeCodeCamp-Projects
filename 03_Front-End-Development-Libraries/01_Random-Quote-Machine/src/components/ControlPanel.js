/* eslint react/prop-types: 0 */
import React from "react";
import RefreshButton from "./RefreshButton";
import TweetButton from "./TweetButton";

const ControlPanel = ({ refreshClick, tweetText }) => {
  return (
    <div className="control-panel">
      <RefreshButton onClick={refreshClick} className="button" />
      <TweetButton text={tweetText} className="button" />
    </div>
  );
};

export default ControlPanel;
