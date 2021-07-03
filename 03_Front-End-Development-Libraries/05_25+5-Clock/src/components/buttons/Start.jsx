import React from "react";
import styled from "styled-components";

const StartButton = styled.button`
  border: none;
  transition: all ease-in 0.09s;
  animation: fadeIn 0.5s;

  /* &:active {
    transform: scale(0.9);
  } */
`;

const Start = ({ onClick, isClockRunning }) => {
  return (
    <StartButton aria-label={"start pomodoro session"} onClick={onClick}>
      {!isClockRunning ? (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9385 12.1254L3.23647 20.7389C1.81904 21.4691 0 20.5849 0 19.1128V1.88588C0 0.416087 1.81641 -0.470456 3.23647 0.262108L19.9385 8.87557C20.261 9.03917 20.529 9.27565 20.7154 9.56102C20.9018 9.8464 21 10.1705 21 10.5005C21 10.8305 20.9018 11.1546 20.7154 11.44C20.529 11.7254 20.261 11.9618 19.9385 12.1254Z"
            fill="#162EFC"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 0H17.5C18.4283 0 19.3185 0.368749 19.9749 1.02513C20.6313 1.6815 21 2.57174 21 3.5V17.5C21 18.4283 20.6313 19.3185 19.9749 19.9749C19.3185 20.6313 18.4283 21 17.5 21H3.5C2.57174 21 1.6815 20.6313 1.02513 19.9749C0.368749 19.3185 0 18.4283 0 17.5V3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0Z"
            fill="#FF0000"
          />
        </svg>
      )}
    </StartButton>
  );
};

export default Start;
