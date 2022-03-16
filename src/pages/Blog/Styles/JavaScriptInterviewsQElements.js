import styled from 'styled-components'

export const JsIQTitle = styled.h1`
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

export const JsIQParagraph = styled.p`
  text-align: left;
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 20px;
  @media screen and (max-width: 960px){
    text-align: center;
  }
  `;

export const JsIQContainer = styled.div`
 color: white;
  align-self: center;
  justify-content: center;
  text-align-last: start;
  padding: 0 50px;
  @media screen and (max-width: 960px){
    text-align-last: center;    
    padding: 0 50px;
  }
`;