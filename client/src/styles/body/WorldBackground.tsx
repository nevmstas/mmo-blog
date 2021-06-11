import { css, Theme } from '@emotion/react';

export const WorldBackground = (theme: Theme) => css`
  body{  
    background-color: ${theme.world.sky};
  }
`
