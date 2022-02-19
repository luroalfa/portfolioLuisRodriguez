import styled from "styled-components";

export const WebsiteContainer = styled.main`
  display: grid;
  grid-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: auto;
  }
`;

export const WebsiteTitle = styled.h1`
  padding: 70px 0 20px 0;
  font-size: 3em;
  text-align: center;
  color: white;
  span {
    color: var(--secondaryColor);
  }
  @media screen and (max-width: 960px) {
    font-size: 2em;
  }
`;

export const WebsiteImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const WebsiteSubContainer = styled.section`
  margin-top: 20px;
  color: white;
  width: 100%;
`;


export const WebsiteSCPublication = styled.div`
  text-align: end;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const WebsiteSCContain = styled.div``;

export const WebsiteContainerButton = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtomStyle = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--secondaryColor);
  border: 1px solid black;
  padding: 10px;
  border-radius: 50px;
  align-self: center;
  width: 100%;
  text-align: center;
  color: var(--mainColor);
  &:hover {
    color: white;
    background: var(--mainColor);
  }
`;

export const WebsiteSpan = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const WebsiteSpanUppercase = styled.span`
  text-transform: uppercase;
`;


export const WebsiteContainerTechnology = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


export const WebsiteTag = styled.span`
  background: white;
  border-radius: 50px;
  font-size: 12px;
  margin: 10px 5px 10px 5px;
  color: black;
  padding: 2px 10px;
  text-transform: uppercase;
  `;