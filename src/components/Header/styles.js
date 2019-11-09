import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

const entrance = keyframes`
  from {

    opacity: 0.5
  }

  to {

    opacity: 1
  }
`;

export const Container = styled.div`
  height: 80px;
  background: #fff;
  animation: ${entrance} 2s;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
`;

export const Logo = styled.div`
  display: flex;

  strong {
    color: #7159c1;
    font-size: 20px;
    border-bottom: 3px solid #7159c1;
    padding-bottom: 4px;
  }
`;

export const Button = styled(Link)`
  background: #7159c1;
  color: #fff;
  border: 0;
  width: 140px;
  height: 50px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${lighten(0.05, '#7159c1')};
  }
`;
