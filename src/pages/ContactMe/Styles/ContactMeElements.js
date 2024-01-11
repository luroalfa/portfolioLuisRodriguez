import styled from "styled-components";

const accentColor = "rgba(255, 191, 0, 0.3)";
const hoverAccentColor = "rgba(255, 191, 0, 0.1)";
const textColor = "#a0a0a0";
const textHoverColor = "#fff";
const borderRadius = "50px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 960px) {
    width: 25%;
  }
`;

export const Title = styled.h1`
  color: ${textColor};
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${textHoverColor};
  padding: 10px;
  margin: 10px 0;
  text-align: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${accentColor};
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  text-decoration: none;
  font-size: 16px;
  border-radius: ${borderRadius};
  width: 200px;

  @media (min-width: 960px) {
    width: 500px;
  }

  &:hover {
    background-color: ${hoverAccentColor};
  }
`;
