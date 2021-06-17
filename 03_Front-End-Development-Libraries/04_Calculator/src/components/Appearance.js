import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const AppearanceContainer = styled.div`
  display: ${(props) => (props.isAppearanceToggled ? "" : "none")};
  background: ${({ currentTheme }) =>
    currentTheme === "#0a0a0b" ? "#111010" : "white"};
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.03);
  border-radius: 18px;
  width: 100%;
  height: 50%;
  bottom: 4px;
  position: absolute;
  animation: ${(props) =>
    props.isAppearanceToggled ? "fadeInUp" : "fadeOutDown"};
  animation-duration: 0.3s;
  overflow: auto;
  scrollbar-color: #f0f0f0 white;
`;

const ColorsContainer = styled.div`
  display: flex;
`;

const ThemeContextTitle = styled.span`
  font-family: "Inter", sans-serif;
  display: inline-block;
  color: #4f4a4a;
  font-size: 1.1rem;
  margin: 20px 0 0 20px;
`;

const Color = styled.button`
  margin: 10px;
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border: 2px solid #939090;
  border-radius: 50%;
  background: ${({ circleColor }) => circleColor};
  transition: all ease-out 0.08s;

  &:active {
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1)); */
    transform: scale(0.9);
  }

  &:before {
    ${({ currentTheme, circleColor }) => {
      if (Object.values(currentTheme).includes(circleColor)) {
        return activeColorStyle;
      }
    }}
    color: ${({ circleColor }) =>
      circleColor === "white" || circleColor === "#fff" ? "black" : "white"};
  }
`;

let theme = {
  body: {
    pink: "#ff00a7",
    blue: "blue",
    yellow: "#FBFF4D",
    red: "#DD4141",
    black: "#0a0a0b",
  },
  screen: {
    black: "black",
    white: "white",
  },
  button: {
    black: "#000",
    white: "#fff",
  },
};

let activeColorStyle = `
content: "✔";
`;

const Appearance = () => {
  const {
    isAppearanceToggled,
    currentTheme,
    setcurrentTheme,
    setisAppearanceToggled,
  } = React.useContext(CalculatorContext);

  const handleThemeColorChange = (type, color) => {
    if (type === "body" && color === "#0a0a0b") {
      let newCurrentTheme = { ...currentTheme };
      newCurrentTheme.body = color;
      newCurrentTheme.screen = "black";
      newCurrentTheme.button = "#000";
      setcurrentTheme(newCurrentTheme);
      setisAppearanceToggled(false);
    } else {
      if (type === "body") {
        let newCurrentTheme = { ...currentTheme };
        newCurrentTheme.body = color;
        setcurrentTheme(newCurrentTheme);
        setisAppearanceToggled(false);
      } else if (type === "screen") {
        let newCurrentTheme = { ...currentTheme };
        newCurrentTheme.screen = color;
        setcurrentTheme(newCurrentTheme);
      } else if (type === "button") {
        let newCurrentTheme = { ...currentTheme };
        newCurrentTheme.button = color;
        setcurrentTheme(newCurrentTheme);
      }
    }
  };

  return (
    <AppearanceContainer
      currentTheme={currentTheme.body}
      isAppearanceToggled={isAppearanceToggled}
    >
      <ThemeContextTitle>Body</ThemeContextTitle>
      <ColorsContainer>
        {Object.entries(theme.body).map((color, i) => (
          <Color
            currentTheme={currentTheme}
            key={i}
            circleColor={color[1]}
            onMouseDown={() => handleThemeColorChange("body", color[1])}
          />
        ))}
      </ColorsContainer>
      <ThemeContextTitle>Screen</ThemeContextTitle>
      <ColorsContainer>
        {Object.entries(theme.screen).map((color, i) => (
          <Color
            currentTheme={currentTheme}
            key={i}
            circleColor={color[1]}
            onMouseDown={() => handleThemeColorChange("screen", color[1])}
          />
        ))}
      </ColorsContainer>
      <ThemeContextTitle>Button</ThemeContextTitle>
      <ColorsContainer>
        {Object.entries(theme.button).map((color, i) => (
          <Color
            currentTheme={currentTheme}
            key={i}
            circleColor={color[1]}
            onMouseDown={() => handleThemeColorChange("button", color[1])}
          />
        ))}
      </ColorsContainer>
    </AppearanceContainer>
  );
};

export default Appearance;
