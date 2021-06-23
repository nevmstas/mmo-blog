import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const wave = (props: any) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${props};
  background-size: 1000px 100px;
`;

const firstWaveAnimate = keyframes`
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: 1000px;
    }
`;

const FirstWave = styled.div`
  ${(props) => wave(props.theme.world.water)}
  animation: ${firstWaveAnimate} 30s linear infinite;
  z-index: 10;
  animation-delay: 0s;
  bottom: 0;
  opacity: 1;
`;

const secondtWaveAnimate = keyframes`
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: -1000px;
    }
`;

const SecondWave = styled.div`
  ${(props) => wave(props.theme.world.water)}
  animation: ${secondtWaveAnimate} 15s linear infinite;
  z-index: 9;
  animation-delay: -5s;
  bottom: 10px;
  opacity: 0.5;
`;

const Water = () => {
  return (
    <>
      <FirstWave />
      <SecondWave />
    </>
  );
};

export default Water;
