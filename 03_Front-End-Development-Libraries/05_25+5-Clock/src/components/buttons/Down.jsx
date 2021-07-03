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

const DownButton = ({ onClick, ariaLabel }) => {
  return (
    <UpButtonWrapper aria-label={ariaLabel} onClick={onClick}>
      <UpButtonSVG
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.3289" cy="13.171" r="6.71053" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.671 0.578949C5.87663 0.578949 0.368408 6.08717 0.368408 12.8816C0.368408 19.676 5.87663 25.1842 12.671 25.1842C19.4654 25.1842 24.9737 19.676 24.9737 12.8816C24.9737 6.08717 19.4654 0.578949 12.671 0.578949ZM9.09209 10.6447C8.93336 10.6429 8.77695 10.6829 8.63855 10.7606C8.50014 10.8383 8.38463 10.9511 8.30361 11.0876C8.22732 11.2202 8.19095 11.3721 8.19889 11.5248C8.20682 11.6776 8.25872 11.8248 8.34834 11.9488L11.9273 16.9817C12.0127 17.0986 12.1247 17.1934 12.254 17.2583C12.3834 17.3233 12.5263 17.3565 12.671 17.3553C12.816 17.3567 12.9591 17.3236 13.0887 17.2586C13.2182 17.1936 13.3304 17.0987 13.4159 16.9817L16.9949 11.9488C17.0845 11.8248 17.1364 11.6776 17.1443 11.5248C17.1522 11.3721 17.1159 11.2202 17.0396 11.0876C16.9585 10.951 16.8428 10.8381 16.7042 10.7603C16.5656 10.6826 16.4089 10.6427 16.25 10.6447H9.09209Z"
          fill="#162EFC"
        />
      </UpButtonSVG>
    </UpButtonWrapper>
  );
};

export default DownButton;
