// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Theme } from '@emotion/react';
import React from 'react';

const WorldBackground = (theme: Theme) => css`
  background-color: ${theme.palette.primary};
`;

const WorldBackGroundWrapper: React.FC = ({ children }) => {
  return <div css={WorldBackground}>{children}</div>;
};

export default WorldBackGroundWrapper;
