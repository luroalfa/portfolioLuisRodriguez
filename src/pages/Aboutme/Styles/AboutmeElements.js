import styled from 'styled-components';

export const AboutMain = styled.main`
  padding: 0px 50px;
  height: 100%;
  width:100%;
  background: var(--mainColor);
  justify-content: center;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  color: white;
  padding: 20px;
  position: relative;
  font-size: 2em;

  &:before{
    content:'';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 130px;
    height: 2px;
    background: var(--secondaryColor);
    transform: translateX(-50%);
  }
  &:after{
    content:'Who i am';
    position: absolute;
    bottom: 5px;
    left: 50%;
    font-size: 10px;
    color:var(--secondaryColor);
    padding: 2px;
    background: var(--mainColor);
    transform: translateX(-50%);
}
`;

export const SkillsTitle = styled.h2`
  color: white;
  padding: 20px;
  position: relative;
  font-size: 2em;

  &:before{
    content:'';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 130px;
    height: 2px;
    background: var(--secondaryColor);
    transform: translateX(-50%);
  }
  &:after{
    content:'What i Know';
    position: absolute;
    bottom: 5px;
    left: 50%;
    font-size: 10px;
    color:var(--secondaryColor);
    padding: 2px;
    background: var(--mainColor);
    transform: translateX(-50%);
}
`;

export const AboutHobbies = styled.h2`
  color: white;
  padding: 20px;
  position: relative;
  font-size: 2em;

  &:before{
    content:'';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 130px;
    height: 2px;
    background: var(--secondaryColor);
    transform: translateX(-50%);
  }
  &:after{
    content:'Who i am';
    position: absolute;
    bottom: 5px;
    left: 50%;
    font-size: 10px;
    color:var(--secondaryColor);
    padding: 2px;
    background: var(--mainColor);
    transform: translateX(-50%);
}
`;



///************************************************************REVISAR PARA EL RESPONSIVE */

export const AboutMainSection = styled.section`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: 500px 500px;
  overflow: hidden;
  justify-content: space-around;
  
  @media screen and (max-width: 960px){
    grid-template-columns: 100%;
    overflow: hidden;
  }
  
`;

export const AboutSkillSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  
  @media screen and (max-width: 960px){ 
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  
`;

export const FotoSkills = styled.img`
width: 100%;
height: 100%;
justify-self: center;
align-self: center;
object-fit: fill;
`;

export const AboutContainer = styled.div`
  color: white;
  align-self: center;
  justify-content: center;
  text-align-last: start;
  padding: 0 50px;
  @media screen and (max-width: 960px){
    text-align-last: center;    
    padding: 0 0px;
  }
`;

export const AboutSkillsContainer = styled.div`
  color: white;
  align-self: center;
  justify-content: center;
  text-align-last: start;
  padding: 0 50px;
  @media screen and (max-width: 960px){
    text-align-last: center;    
    padding: 0 0px;
    order: 1;
  }
`;

export const ContainerStikers = styled.section`
  margin-top: 20px;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  
  @media screen and (max-width: 960px){
    padding: 0 0px;//Continue
  }
`;

export const FotoStikers = styled.img`
width: 50px;
height: 50px;
padding: 10px;
object-fit: fill;
animation: spin 10s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;

export const AboutSubTitle = styled.h4`
  color: var(--secondaryColor);
  font-size: 2.5em;
  @media screen and (max-width: 960px){
    font-size: 1.5em;
  }
`;

export const Paragraph = styled.p`
  text-align: left;
  line-height: 1.5;
  font-size: 16px;
  @media screen and (max-width: 960px){
    text-align: center;
  }
  `;

export const WrapStickers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

export const AboutLink = styled.a`
  font-size: 12px;
  color: white;
  text-decoration: none;
  text-align-last: center;
  cursor: pointer;
      &:hover{
      color:var(--secondaryColor);
`;





