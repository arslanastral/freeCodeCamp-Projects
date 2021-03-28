/* eslint react/prop-types: 0 */
import React from "react";

const RefreshButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <svg
        className="svgIcon"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 0C8.55 0 0 8.55 0 19C0 29.45 8.55 38 19 38C24.225 38 29.07 35.9575 32.49 32.49L29.07 29.07C26.505 31.635 22.9425 33.25 18.9525 33.25C11.0675 33.25 4.7025 26.885 4.7025 19C4.7025 11.115 11.0675 4.75 18.9525 4.75C22.895 4.75 26.315 6.46 28.88 9.0725L23.7025 14.25H37.9525V0L32.3 5.6525C28.88 2.2325 24.1775 0 18.9525 0H19Z"
          fill="black"
        />
        <path
          d="M19 0C8.55 0 0 8.55 0 19C0 29.45 8.55 38 19 38C24.225 38 29.07 35.9575 32.49 32.49L29.07 29.07C26.505 31.635 22.9425 33.25 18.9525 33.25C11.0675 33.25 4.7025 26.885 4.7025 19C4.7025 11.115 11.0675 4.75 18.9525 4.75C22.895 4.75 26.315 6.46 28.88 9.0725L23.7025 14.25H37.9525V0L32.3 5.6525C28.88 2.2325 24.1775 0 18.9525 0H19Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default RefreshButton;
