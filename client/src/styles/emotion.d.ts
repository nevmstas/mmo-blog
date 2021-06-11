import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: string;
    };
    world: {
      water: string;
      land: string;
      sun: string;
      wood: string;
      plants: string;
      sky: string;
    };
  }
}
