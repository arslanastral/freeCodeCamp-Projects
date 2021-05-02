import React from "react";
import styled from "styled-components";

const Display = styled.div`
  background-color: black;
  width: 249px;
  height: 120px;
  margin: 23px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const WaveForm = styled.div`
  height: 70%;
  width: 100%;
`;

const NoteStatus = styled.div`
  margin: 10px;
  /* background-color: red; */
  height: 20%;
  width: 100%;
  display: flex;
`;

const NoteName = styled.p`
  margin: 3px 0 0 6px;
  color: white;
`;

const DisplayScreen = () => {
  return (
    <Display>
      <WaveForm />
      <NoteStatus>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11.5" cy="11.5" r="11.5" fill="#B31326" />
          <path
            d="M11 4V12.7917C10.5083 12.5083 9.94167 12.3333 9.33333 12.3333C7.49167 12.3333 6 13.825 6 15.6667C6 17.5083 7.49167 19 9.33333 19C11.175 19 12.6667 17.5083 12.6667 15.6667V7.33333H16V4H11Z"
            fill="white"
          />
        </svg>
        <NoteName>C#</NoteName>
      </NoteStatus>
    </Display>
  );
};

export default DisplayScreen;
