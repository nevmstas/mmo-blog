import { css, Theme } from '@emotion/react';

export const WorldBackground = (theme: Theme) => css`
  body{ 
    overflow: hidden; 
    background-color: ${theme.world.sky};
  }
`
