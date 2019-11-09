import styled, { keyframes } from 'styled-components';

const entrance = keyframes`
  from {

    opacity: 0
  }

  to {

    opacity: 1
  }
`;

export const Container = styled.div`
  height: 120px;
  width: 100%;
  background: #fff;
  animation: ${entrance} 2s;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  strong {
    color: #7159c1;
    font-size: 16px;
    text-align: center;
    opacity: 0.8;
  }
`;
