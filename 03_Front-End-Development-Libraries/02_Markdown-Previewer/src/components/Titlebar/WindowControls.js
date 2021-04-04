import React from "react";

const WindowControls = () => {
  return (
    <div className="window-controls">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#FF4742"
            stroke="#E0443E"
            strokeWidth=".5"
          ></circle>
          <circle
            cx="26"
            cy="6"
            r="6"
            fill="#FCD019"
            stroke="#DEA123"
            strokeWidth=".5"
          ></circle>
          <circle
            cx="46"
            cy="6"
            r="6"
            fill="#AD00EE"
            stroke="#1AAB29"
            strokeWidth=".5"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default WindowControls;
