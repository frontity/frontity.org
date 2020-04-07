import { connect,css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Typist from "react-typist";

import FrontityOrg from "../../types";
import Arrow from "./icons/arrow";

const HeroAnimation: React.FC<Connect<FrontityOrg>> = ({ state, actions }) => {
  const { isHeroTerminalVisible, isHeroBlogVisible } = state.theme;

  return (
    <Container>
      <Terminal
        className="terminal"
        css={css`
          ${!isHeroTerminalVisible
            ? `transform: translateY(150px); 
          transition: all 1s ease;`
            : `transform: translateY(0); 
          transition: all 1s ease;`}
        `}
      >
        <Button
          onClick={() => {
            state.theme.isHeroTerminalVisible
              ? actions.theme.hideHeroTerminal()
              : actions.theme.showHeroTerminal();
          }}
        >
          <IconContainer isHeroTerminalVisible={isHeroTerminalVisible}>
            <Arrow color="white" />
          </IconContainer>
        </Button>
        <Typist
          avgTypingDelay={60}
          cursor={{
            show: false,
          }}
          onTypingDone={() => {
            actions.theme.hideHeroTerminal();
            actions.theme.showHeroBlog();
            return;
          }}
        >
          <ol>
            <li>npx frontity create my-app</li>
            <Typist.Delay ms={1000} />
            <li>cd my-app</li>
            <Typist.Delay ms={1000} />
            <li>npx frontity dev</li>
          </ol>
        </Typist>
      </Terminal>
      <AnimationContainer>
        <ClipLoader size={50} color={"blue"} />
        Setting up Frontity...
        <ImgContainer
          css={css`
            ${isHeroBlogVisible
              ? `filter: opacity(1); 
          transition: all 2.5s ease;`
              : `filter: opacity(0); 
          transition: all 2.5s ease;`}
          `}
        >
          <img
            alt="Frontity blog homepage"
            src="https://wp.frontity.org/wp-content/uploads/2020/02/twitter-twenty-twenty-frontity-theme.png"
          />
        </ImgContainer>
      </AnimationContainer>
    </Container>
  );
};

export default connect(HeroAnimation);

const Container = styled.div`
  position: relative;
  height: 500px;
`;
const Terminal = styled.div`
  position: absolute;
  height: 350px;
  width: 400px;
  top: 115px;
  background: black;
  color: white;
  z-index: 2;
`;
const AnimationContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 480px;
  right: -60px;
  background: white;
  z-index: 1;
`;
const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Button = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 24px;
  box-sizing: border-box;
  padding: 0px 8px;

  /* Place inner elements in a row */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div<{ isHeroTerminalVisible: boolean }>`
  /* Do not resize icon (it's inside a flex container) */
  flex: 0 0 auto;
  width: auto;
  height: 24px;

  /* Center the icon */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Rotate the icon if the dropdown is open */
  transform: rotate(
    ${({ isHeroTerminalVisible }) => (!isHeroTerminalVisible ? 180 : 0)}deg
  );
  transition: transform 0.3s;
`;
