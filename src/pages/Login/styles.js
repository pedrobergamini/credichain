import styled, { keyframes } from 'styled-components';

const entrance = keyframes`
  from {
    opacity: 0.3
    transform: translateX(-35%)
  }
  to {
    opacity: 1;
    transform: translateX(0%)
  }
`;

export const Container = styled.div`
  height: 90vh;
  background: #7159c1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 8px;
    padding: 50px;
    margin-top: 15px;
    animation: ${entrance} 1.5s;

    strong {
      font-size: 30px;
      color: #7159c1;
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #7159c1;
      padding-bottom: 8px;
    }

    input {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #7159c1;
      border-radius: 8px;
      height: 60px;
      padding: 0 15px;
      color: #7159c1;
      width: 100%;
      margin: 0 0 15px;
      font-size: 20px;
      &::placeholder {
        color: #7159c1;
      }
    }

    button {
      margin: 40px 0 0;
      height: 44px;
      background: #fff;
      font-weight: bold;
      color: #7159c1;
      border: 1px solid #7159c1;
      border-radius: 8px;
      font-size: 20px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
  a {
    color: #7159c1;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      opacity: 1;
    }
  }
`;
