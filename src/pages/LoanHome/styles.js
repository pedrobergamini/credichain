import styled, { keyframes } from 'styled-components';

const entrance = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  animation: ${entrance} 1s;
  height: 100%;
  max-height: 400px;
  width: 100%;
  max-width: 1500px;
  background: #fff;
  border-radius: 12px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;

    h3 {
      color: #7159c1;
      font-size: 30px;
      margin-right: 15px;

      display: flex;
      align-items: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #7159c1;
      border-radius: 8px;
      height: 60px;
      padding: 0 90px;
      color: #7159c1;
      width: 100%;
      margin: 0 0 15px;
      font-size: 22px;
      &::placeholder {
        opacity: 0.6;
        color: #7159c1;
      }
    }

    button {
      margin: 40px 0 0;
      height: 60px;
      width: 400px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 1px solid #7159c1;
      border-radius: 8px;
      font-size: 22px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const Below = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Limit = styled.div`
  animation: ${entrance} 1s;
  height: 400px;
  width: 740px;
  background: #fff;
  border-radius: 12px;
  margin-top: 25px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-top: 20px;
    border: 1px solid #7159c1;
    border-radius: 8px;
    background: #7159c1;
  }

  h3 {
    color: #7159c1;
    font-size: 30px;
    margin-top: 20px;
    border-bottom: 2px solid #7159c1;
    padding-bottom: 15px;
  }

  strong {
    color: #7159c1;
    font-size: 22px;
    margin-top: 60px;
  }

  button {
    margin: 40px 0 0;
    height: 60px;
    padding: 0 30px;
    background: #7159c1;
    font-weight: bold;
    color: #fff;

    border-radius: 8px;
    font-size: 22px;

    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Instalments = styled.div`
  animation: ${entrance} 1s;
  height: 400px;
  width: 740px;
  background: #fff;
  border-radius: 12px;
  margin-top: 25px;
  margin-left: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-top: 20px;
    border: 1px solid #7159c1;
    border-radius: 8px;
    background: #7159c1;
  }

  h3 {
    color: #7159c1;
    font-size: 30px;
    margin-top: 20px;
    border-bottom: 2px solid #7159c1;
    padding-bottom: 15px;
  }
`;
