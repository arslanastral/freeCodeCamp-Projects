import React from "react";
import styled from "styled-components";

const StartButton = styled.button`
  border: none;
  transition: all ease-in 0.09s;

  &:active {
    transform: scale(0.9);
  }
`;

const Start = ({ onClick }) => {
  return (
    <StartButton onClick={onClick}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9385 12.1254L3.23647 20.7389C1.81904 21.4691 0 20.5849 0 19.1128V1.88588C0 0.416087 1.81641 -0.470456 3.23647 0.262108L19.9385 8.87557C20.261 9.03917 20.529 9.27565 20.7154 9.56102C20.9018 9.8464 21 10.1705 21 10.5005C21 10.8305 20.9018 11.1546 20.7154 11.44C20.529 11.7254 20.261 11.9618 19.9385 12.1254V12.1254Z"
          fill="#162EFC"
        />
      </svg>
    </StartButton>
  );
};

export default Start;
