import styled from 'styled-components';
export const AboutHeader = styled.section`
  width: 100%;
  height: 100vh;
  background: rgb(28,31,42);
  background: linear-gradient(0deg, rgba(28,31,42,1) 10%, rgba(28,31,42,0.8071603641456583) 30%); 
`;

export const AboutHeaderbackgroudVideo = styled.video`
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  z-index:-1;
  `;
  
export const AboutHeaderContainer = styled.section`
  padding:60px;
  color: white;
  display: grid;
  grid-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  
  @media screen and (max-width: 960px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  `;
  
export const Foto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.section`
  text-align: left;
  align-self: center;
  padding-left:100px;
  @media screen and (max-width: 960px){
    text-align: center;
    padding-left:0px;
    order:1;
  }
  `;
  
  export const HeroSpan = styled.span`
  font-size: 3em;
  color: white;
  font-family:'Cinzel Decorative'; 
  @media screen and (max-width: 960px){
    font-size: 2em;
  }
  `;
  
  export const HeroSpanYellow = styled.span`
  color: var(--secondaryColor);
  font-family:'Cinzel Decorative'; 
  `;
  
  export const HeroParagraph = styled.p`
  margin-top: 20px;
  color: white;  
  font-size: 1.1em;
  `;
  