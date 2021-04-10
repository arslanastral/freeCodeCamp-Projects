import React from "react";
import Switch from "react-switch";
import useDarkMode from "use-dark-mode";

const NightMode = () => {
  const darkMode = useDarkMode(false, {
    element: document.getElementsByClassName("markdown-body")[0],
  });

  return (
    <div className="dark-mode-controls">
      <span className="moon-icon-titlebar">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.125 0.329991C7.24092 0.470844 7.31193 0.64322 7.32886 0.824849C7.3458 1.00648 7.30788 1.18901 7.22 1.34887C6.53346 2.60937 6.17492 4.02228 6.17738 5.45762C6.17738 10.2326 10.07 14.0991 14.8675 14.0991C15.4933 14.0991 16.1025 14.0337 16.6879 13.9091C16.8674 13.8702 17.0543 13.8851 17.2254 13.9518C17.3965 14.0185 17.5441 14.1342 17.6498 14.2843C17.7614 14.4404 17.8183 14.629 17.8117 14.8208C17.805 15.0126 17.7352 15.1968 17.613 15.3447C16.6816 16.4888 15.5067 17.4106 14.1738 18.043C12.8409 18.6753 11.3838 19.0022 9.9085 18.9999C4.43412 18.9999 0 14.5895 0 9.15549C0 5.06574 2.51038 1.55787 6.08475 0.0711162C6.2628 -0.00413349 6.46046 -0.0195781 6.64804 0.0271023C6.83562 0.0737827 7.00299 0.180068 7.125 0.329991Z"
            fill="white"
          />
        </svg>
      </span>
      <div className="night-mode-toggle">
        <Switch
          onColor="#0000FF"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
    </div>
  );
};

export default NightMode;
