import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  background: #7159c1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  height: 100%;
  max-height: 300px;
  padding: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    a {
      font-size: 22px;
      color: #7159c1;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      border: 2px solid #7159c1;
      border-radius: 8px;
      padding: 20px;

      &:hover {
        opacity: 0.5;
      }
      &:first-child {
        margin-right: 30px;
      }
    }
  }
`;
