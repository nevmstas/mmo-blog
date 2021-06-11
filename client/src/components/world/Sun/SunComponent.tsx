import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const bounce = keyframes`
0%{
    transform: scale(0.8);
  }
  
  50%{
    transform: scale(1.2);
  }
  
  100%{
    transform: scale(0.8);
  }
`;

const circle = () => css`
  position: absolute;
  border-radius: 50%;
  background: #ffe566;
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  animation: ${bounce} 15s infinite;
`;

const Small = styled.div`
  ${circle}
  top: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  opacity: 0.9;
`;

const Medium = styled.div`
  ${circle}
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  opacity: 0.8;
`;

const Large = styled.div`
  ${circle}
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  opacity: 0.7;
`;

const XLarge = styled.div`
  ${circle}
  width: 400px;
  height: 400px;
  top: -200px;
  right: -200px;
  opacity: 0.5;
`;

const XXLarge = styled.div`
  ${circle}
  width: 500px;
  height: 500px;
  top: -250px;
  right: -250px;
  opacity: 0.2;
`;

const SunWithRipple = () => {
  return (
    <div>
      <XXLarge />
      <XLarge />
      <Large />
      <Medium />
      <Small />
    </div>
  );
};

export default SunWithRipple;
