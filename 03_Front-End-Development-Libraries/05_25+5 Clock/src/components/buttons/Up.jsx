import React from "react";
import styled from "styled-components";

const UpButtonSVG = styled.svg`
  width: clamp(12px, 6.5vw, 28px);
  height: clamp(12px, 6.5vw, 28px);
`;

const UpButtonWrapper = styled.button`
  border: 0;
  transition: all ease-in 0.09s;

  &:active {
    transform: scale(0.9);
  }
`;

const UpButton = ({ onClick }) => {
  return (
    <UpButtonWrapper onClick={onClick}>
      <UpButtonSVG
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.3289" cy="13.171" r="6.71053" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7764 0.421051C5.98198 0.421051 0.473755 5.92928 0.473755 12.7237C0.473755 19.5181 5.98198 25.0263 12.7764 25.0263C19.5708 25.0263 25.079 19.5181 25.079 12.7237C25.079 5.92928 19.5708 0.421051 12.7764 0.421051ZM9.19744 14.9605C9.03871 14.9624 8.88229 14.9224 8.74389 14.8447C8.60549 14.7669 8.48998 14.6541 8.40895 14.5176C8.33266 14.385 8.2963 14.2332 8.30423 14.0804C8.31217 13.9277 8.36407 13.7804 8.45369 13.6564L12.0326 8.62355C12.118 8.50671 12.2301 8.41189 12.3594 8.34693C12.4887 8.28197 12.6317 8.24875 12.7764 8.25C13.0761 8.25 13.3546 8.3898 13.5213 8.62355L17.1002 13.6564C17.1898 13.7804 17.2417 13.9277 17.2497 14.0804C17.2576 14.2332 17.2212 14.385 17.1449 14.5176C17.0638 14.6543 16.9481 14.7672 16.8095 14.8449C16.6709 14.9227 16.5143 14.9626 16.3553 14.9605H9.19744Z"
          fill="#162EFC"
        />
      </UpButtonSVG>
    </UpButtonWrapper>
  );
};

export default UpButton;
