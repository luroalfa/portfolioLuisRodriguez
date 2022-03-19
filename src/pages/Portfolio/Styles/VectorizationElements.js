import styled from "styled-components";

export const VectorizationsContainer = styled.main`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-auto-flow: dense;
  gap: 20px;
  padding: 20px;
  div{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  p{
    color: white;
  }
`;

export const VectorizationsTitle = styled.h1`
  padding: 70px 0 20px 0;
  font-size: 2.5em;
  text-align: center;
  color: white;
  span {
    color: var(--secondaryColor);
  }
  @media screen and (max-width: 960px) {
    font-size: 2.5em;
  }
`;
