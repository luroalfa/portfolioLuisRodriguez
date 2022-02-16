import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const PortfolioContent = styled.div`
  padding-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(28,31,42);
  text-align: center;
  @media screen and (max-width: 960px){
    width: 100%;
  }
`;
export const PortfolioContentArticles = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;
export const PortfolioInputSearch = styled.input`
  margin-left: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: center;
  border: none;
  padding: 5px;
`;
export const PortfolioTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size:2em;
  color: white;
`;
export const PortfolioSearch = styled.div`
  color: white;
`;
export const PortfolioParagraphTitle = styled.p`
  margin: 10px;
  color: white;
  width: 100%;
  @media screen and (max-width: 960px){
    text-align: center;
  }
`;
export const PortfolioCard = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(255, 255, 255, 0.2);
  overflow: hidden;
  width: 300px;
  border: 2px solid white;
  @media screen and (max-width: 960px){
    width: 400px;
  }
`;
export const PortfolioCardHeader = styled.div`
`;
export const PortfolioImage = styled.img`
width: 100%;
height: 100%;
object-fit: content;
`;
export const PortfolioCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
  padding: 20px;
  min-height: 50px;
  `;
export const PortfolioTag = styled.span`
  background: var(--mainColor);
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: white;
  padding: 2px 10px;
  text-transform: uppercase;
  `;
export const PortfolioTitleCard = styled.h3`
  margin-top:10px;
  text-transform: uppercase;  
  `;
export const PortfolioParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  `;
export const PortfolioParagraphPubli = styled.p`
  font-size: 14px;
  margin: 10px 0 30px 0px;
  `;
export const PortfolioParagraphSpan = styled.span`
  font-weight: 600;
  `;
export const PortfolioButtom = styled(Link)`
  text-transform: uppercase;  
  text-decoration: none;
  background: var(--secondaryColor);
  border: 1px solid black;
  Padding: 10px;
  border-radius: 50px;
  align-self: center;
  width: 100%;
  text-align: center;
  color: var(--mainColor);
  &:hover{
    color: white;
    background: var(--mainColor);
  }
  `;

export const PortfolioContainerTag = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    flex-direction: row;
  `;