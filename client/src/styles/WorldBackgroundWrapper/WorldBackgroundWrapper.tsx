import React, { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import SunWithRipple from '../../components/world/Sun/SunComponent';

const LandContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 300px;
  background-color: ${(props) => props.theme.world.land};
`;

const WorldBackgroundWrapper: FC = ({ children }) => {
  return (
    <>
      <SunWithRipple />
      <LandContainer />
      {children}
    </>
  );
};

export default WorldBackgroundWrapper
