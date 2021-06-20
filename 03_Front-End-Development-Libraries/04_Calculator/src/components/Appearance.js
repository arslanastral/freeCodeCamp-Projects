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
  bottom: 4px;
  position: absolute;
  animation: ${(props) =>
    props.isAppearanceToggled ? "fadeInUp" : "fadeOutDown"};
  animation-duration: 0.3s;
  overflow: auto;
  scrollbar-color: ${({ currentTheme }) =>
    currentTheme === "#0a0a0b" ? "#171717 #131212" : "#f0f0f0 white"};
`;

const ColorsContainer = styled.div`
  display: flex;
`;

const ScreenButtonColorsContainer = styled.div`
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
  /* border: 1px solid #333; */

  border-radius: 50%;
  background-color: ${({ circleColor }) => circleColor};
  background-image: ${({ circleGradient }) => circleGradient};
  transition: all ease-out 0.08s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  &:active {
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
  rewards: {
    1: [
      "#91d370",
      "linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%)",
    ],
    2: [
      "#fce055",
      "linear-gradient(319deg, #fce055 0%, #256eff 37%, #46237a 100%)",
    ],
    3: [
      "#ff1493",
      "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)",
    ],
    4: [
      "#f2dd6e",
      "linear-gradient(319deg, #f2dd6e 0%, #cff27e 37%, #ef959d 100%)",
    ],
    5: [
      "#ff7d59",
      "linear-gradient(319deg, #ff7d59 0%, #ff583a 37%, #f4a698 100%)",
    ],
  },
};

let activeColorStyle = `
content: "✔";
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
`;

const Appearance = () => {
  const {
    isAppearanceToggled,
    currentTheme,
    setcurrentTheme,
    setisAppearanceToggled,
    skinUnlocked,
  } = React.useContext(CalculatorContext);

  let unlockedContent;

  const handleThemeColorChange = (type, color, gradient) => {
    // eslint-disable-next-line no-unused-vars
    gradient = gradient || "";
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
        newCurrentTheme.gradient = gradient;
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

  if (skinUnlocked === "Dramatic...PAUSE!") {
    unlockedContent = (
      <div>
        <ThemeContextTitle>
          Unlocked Skins{" "}
          <span role="img" aria-label="rewards">
            ✨
          </span>
        </ThemeContextTitle>

        <ColorsContainer>
          {Object.entries(theme.rewards).map((color, i) => (
            <Color
              currentTheme={currentTheme}
              key={i}
              circleColor={color[1][0]}
              circleGradient={color[1][1]}
              onMouseDown={() =>
                handleThemeColorChange("body", color[1][0], color[1][1])
              }
            />
          ))}
        </ColorsContainer>
      </div>
    );
  }

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
      <ScreenButtonColorsContainer>
        <div>
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
        </div>

        <div>
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
        </div>
      </ScreenButtonColorsContainer>
      {unlockedContent}
    </AppearanceContainer>
  );
};

export default Appearance;
