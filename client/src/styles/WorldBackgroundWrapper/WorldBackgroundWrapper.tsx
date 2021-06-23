import React, { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import SunWithRipple from '../../components/world/Sun';
import Water from  '../../components/world/Water'

const LandContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  border-top-left-radius: 20%;
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.world.land};
`;

const LandCircles = styled.div<{ size: string }>`
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background-color: ${(props) => props.theme.world.land};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const Land = styled.div`
  border-radius: 50%;
  width: 1000px;
  height: 1000px;
  position: absolute;
  bottom: -500px;
  right: -500px;
  background-color: ${(props) => props.theme.world.land};
`;
const SecondLand = styled.div`
  border-radius: 50%;
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: -250px;
  right: 200px;
  background-color: ${(props) => props.theme.world.land};
`;

// const Water = styled.div`
//   position: absolute;
//   width: 100%;
//   background-color: ${(props) => props.theme.world.water};
//   height: 100px;
//   bottom: 0;
// `;
//!!!disable scrolling

const WorldBackgroundWrapper: FC = ({ children }) => {
  return (
    <>
      <SunWithRipple />
      <Land />
      <SecondLand />
      <Water />
      {/* <LandContainer>
        <LandCircles size='200px'/>
        <LandCircles size='400px'/>
        <LandCircles size='300px'/>
        <LandCircles size='400px'/>
      </LandContainer> */}

      {children}
    </>
  );
};

export default WorldBackgroundWrapper;
