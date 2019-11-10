import styled, { keyframes } from 'styled-components';

const entrance = keyframes`
  from {

    opacity: 0.5
  }

  to {

    opacity: 1
  }
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  animation: ${entrance} 1s;
`;

export const ImageWrapper = styled.img`
  width: 100%;
`;
