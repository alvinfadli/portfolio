import React from "react";
import styled, { keyframes } from "styled-components";

interface BeforeElementProps {
  beforeDuration: number;
}

interface AfterElementProps {
  afterDuration: number;
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const animateBefore = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(10%) scale(0.8);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const animateAfter = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-5%) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`;

const AnimationContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent overflow */
`;

const BeforeElement = styled.div<BeforeElementProps>`
  position: fixed;
  z-index: -1;
  opacity: 0.8;
  background: var(--third-glow);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  filter: blur(90px);
  animation: ${animateBefore} ${({ beforeDuration }) => beforeDuration}s
    infinite;
`;

const AfterElement = styled.div<AfterElementProps>`
  position: fixed;
  z-index: -1;
  opacity: 0.8;
  background: var(--secondary-glow);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  filter: blur(100px);
  animation: ${animateAfter} ${({ afterDuration }) => afterDuration}s infinite;
`;

const AnimatedBackground: React.FC = () => {
  const beforeDuration = getRandomInt(4, 8);
  const afterDuration = getRandomInt(4, 8);

  return (
    <div className="bg-fixed">
      <AnimationContainer>
        <BeforeElement beforeDuration={beforeDuration} />
        <AfterElement afterDuration={afterDuration} />
      </AnimationContainer>
    </div>
  );
};

export default AnimatedBackground;
