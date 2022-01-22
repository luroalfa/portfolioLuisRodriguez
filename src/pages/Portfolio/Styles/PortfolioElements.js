import styled from 'styled-components'



export const PortfolioHeroImage = styled.div`
  padding-top: 70px;
  height: 100vh;
  `;



export const PortfolioSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 10px;
  padding-left: 60px;
  padding-right: 60px;
  justify-items: center;
  @media screen and (max-width: 690px){
    margin-top: 50px;    
    grid-template-columns: repeat(1, 1fr);    
    margin-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    grid-gap: 0px;
  }
  `;


export const PortfolioCard = styled.div`
  /* border: 1px solid white; */
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  position: relative;
  width: 12.5rem;
  width: 80%;
  color: white;
  /* Hover of background */
  &:hover > section{
    transform: scale(1.4, 1.2);  
    opacity: 1;
    transition: transform 200ms cubic-bezier(.21, 1.00, .81, 1.00), opacity 100ms linear;
  }
  /* Hover of front and back, we made small with scale(.8)*/
  &:hover > article{
    /* front */
    &:nth-of-type(1){
      transform: translateY(-30%) scale(.8);
      & > div{
      opacity: 0;
      }
    }
    /* back */
    &:nth-of-type(2){
      opacity: 1;
      text-align: center;
      & > div{
        &:nth-of-type(2){
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          & > img{
            border: 2px solid var(--colorDark);
            &:nth-of-type(1){
              transform: translateX(-50%);
            }
            &:nth-of-type(2){
              transform: translateX(-25%);
            }
          }
        }
      }
    }
  }

`;

export const PortfolioBack = styled.article`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


export const PortfolioFront = styled.article`
  transition: 205ms;
  background: var(--colorLight);
  padding: 10px;
  border-radius: .5em;
  box-shadow: 0 2px 20px rgba(255, 255, 255, 0.5);
  text-align: center;
`;


export const PortfolioImage = styled.img`
  max-width: 100%;
  max-height: 200px;  
  border-radius: .5em;
  
`;

export const PortfolioCardTitle = styled.h2`
  margin: 0.75em 0;
`;

export const PortfolioContainerDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PortfolioDescription = styled.p`
  margin: 0;
  
  `;
export const PortfolioContainerTecnologies = styled.div`
  display: flex;
  justify-content: center;
`;
export const PortfolioImageTecnologies3 = styled.img`
  max-width: 100%;
  width: 2em;
  height: 2em;
  border-radius: 50%;

  border: 2px solid var(--colorDark);
  &:nth-of-type(1){
    transform: translateX(50%);
    z-index: 1;
  }
  &:nth-of-type(2){
    transform: translateX(25%);
  }
  `;
export const PortfolioImageTechnology = styled.img`
  max-width: 100%;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 2px solid var(--colorDark);
`;







export const PortfolioStreamingInfo = styled.div`
  display: flex;
  cursor: pointer;
  font-size: .9em;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PortfolioParagraph = styled.p`
  margin: 0;
`;


export const PortfolioCardButton = styled.button`
  cursor: pointer;
  border: 0;
  background: var(--secondaryColor);
  border-radius: 100vw;
  color: black;
  font-weight: bold;
  padding: .5em 1.5em;
  margin-bottom: 10px;
`;

export const PortfolioBackground = styled.section`
  background: var(--colorDark);
  position: absolute;
  border-radius: .5em;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scale(.2, .9);
  
`;






