import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 85px;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  @media (min-width: 960px) {
    height: 800px;
  }
`;
