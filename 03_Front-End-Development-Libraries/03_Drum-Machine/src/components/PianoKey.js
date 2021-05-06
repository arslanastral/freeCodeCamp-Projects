import React from "react";
import styled from "styled-components";

const WhitePianoKey = styled.button`
  width: 46px;
  height: 100%;
  background: #ffffff;
  /* border: 1px solid rgba(0, 0, 0, 0.08);
  border-collapse: collapse; */
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0;
  /* border-right: 1px solid rgba(0, 0, 0, 0.08); */
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const NoteName = styled.span`
  margin-bottom: 5px;
  font-size: 0.8rem;
  font-family: sans-serif;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const PianoKey = ({
  playKeyboardNote,
  onMouseEnter,
  onMouseLeave,
  noteName,
}) => {
  return (
    <WhitePianoKey
      className={noteName}
      onKeyDown={(e) => playKeyboardNote(e)}
      onMouseEnter={(e) => {
        onMouseEnter(e, noteName);
      }}
      onMouseDown={(e) => {
        onMouseEnter(e, noteName);
      }}
      onMouseUp={() => onMouseLeave(noteName)}
      onMouseLeave={() => onMouseLeave(noteName)}
    >
      <NoteName>{noteName}</NoteName>
    </WhitePianoKey>
  );
};

export default PianoKey;
