import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const HistoryToggleButton = styled.button`
  border: 0;
  padding: 0;
  margin: 10px;
  background: none;
  transition: all ease-out 0.07s;

  &:active {
    transform: scale(0.9);
  }
`;

const HistoryToggleContainer = styled.div``;

const HistoryButton = () => {
  const { isHistoryToggled, setisHistoryToggled } = React.useContext(
    CalculatorContext
  );

  const handleHistoryToggle = () => {
    isHistoryToggled ? setisHistoryToggled(false) : setisHistoryToggled(true);
  };

  return (
    <HistoryToggleContainer>
      <HistoryToggleButton
        aria-label="toggle history"
        onMouseDown={handleHistoryToggle}
      >
        <svg
          width="27"
          height="25"
          role="button"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1275 0.874991C8.55294 0.694158 3.16669 5.97707 3.16669 12.5H0.854602C0.273352 12.5 -0.0108143 13.1975 0.402519 13.5979L4.00627 17.2146C4.2646 17.4729 4.66502 17.4729 4.92335 17.2146L8.5271 13.5979C8.61636 13.5069 8.67667 13.3914 8.70042 13.2661C8.72418 13.1409 8.71032 13.0114 8.66059 12.8939C8.61086 12.7765 8.52749 12.6765 8.42099 12.6064C8.31448 12.5363 8.18961 12.4992 8.0621 12.5H5.75002C5.75002 7.46249 9.85752 3.39374 14.9209 3.45832C19.7259 3.52291 23.7688 7.56582 23.8334 12.3708C23.8979 17.4212 19.8292 21.5417 14.7917 21.5417C12.7121 21.5417 10.7875 20.8312 9.26335 19.63C9.01595 19.4351 8.70555 19.3379 8.39118 19.357C8.07681 19.376 7.78041 19.51 7.55835 19.7333C7.01585 20.2758 7.0546 21.1929 7.66169 21.6579C9.69106 23.2628 12.2044 24.1324 14.7917 24.125C21.3146 24.125 26.5975 18.7387 26.4167 12.1642C26.2488 6.10624 21.1854 1.04291 15.1275 0.874991ZM14.4688 7.33332C13.9392 7.33332 13.5 7.77249 13.5 8.30207V13.0554C13.5 13.5075 13.7454 13.9337 14.1329 14.1662L18.1629 16.5558C18.6279 16.8271 19.2221 16.6721 19.4934 16.22C19.7646 15.755 19.6096 15.1608 19.1575 14.8896L15.4375 12.6808V8.28916C15.4375 7.77249 14.9984 7.33332 14.4688 7.33332Z"
            fill={isHistoryToggled ? "blue" : "#999999"}
          />
        </svg>
      </HistoryToggleButton>
    </HistoryToggleContainer>
  );
};

export default HistoryButton;
