import styled from 'styled-components';
import { Link } from 'react-router-dom'

//Container of the footer
export const  FooterContainer = styled.section`
  padding: 40px 0;
  background-image: linear-gradient(to bottom, #1c1f2a, #181b27, #141723, #101320, #0a0e1d);
`;
//Div-html--> Container of the social media
export const  FooterSocial = styled.div`
  text-align: center;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
`;
export const FooterLiMenu = styled.li`
  
`;
  //Link of react-router-dom
  export const  FooterLink = styled(Link)`
    color: white;
    display: inline-block;
    padding: 0 15px;
    text-decoration: none;
    margin-bottom: 10px;
    &:hover{
      color:var(--secondaryColor);
    }
`;
//Tag-->ul-html
export const  FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding: 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
`;
//Tag -->li-html
export const FooterLi = styled.li`
  position: relative;
  list-style: none;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  box-sizing: border-box;
  background: var(--mainColor);
  &:before, :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondaryColor);
    border-radius: 50%;
    filter: blur(5px);
    opacity: 0;
    transition: 1s;
  }
  &:after{
    filter: blur(20px);
  }
  
  &:hover{
    &:before, :after{
      opacity: 1;
    }
  }
`;
//Tag -->a-html
export const  FooterA = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  text-align: center;
  line-height: 38px;
  color: white;
  background: var(--mainColor);
  border-radius: 50%;
`;
// Enlarge the heart in the tag -->span-html
export const FooterSpan = styled.span`
  animation-name: agrandar;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-direction: alternate;

  //Animation of heart
  @keyframes agrandar{
    0%{
      font-size: 5px;
      color: var(--secondaryColor);
    }
    12%{
      font-size: 6px;
    }
    25%{
      font-size: 7px;
    }
    50%{
      font-size: 8px;
    }
    75%{
      font-size: 9px;
    }
    100%{
      font-size: 12px;
      color: red;
    }
  }
`;
//Tag-->p-html
export const  FooterText = styled.p`
  text-align: center;
  font-size: 13px;
  color: white;
`;
//Illumination of the copyright -->p-html
export const  FooterSubText = styled.p`
  text-align: center;
  font-size: 10px;
  background: linear-gradient(90deg, var(--mainColor), var(--secondaryColor), var(--mainColor));
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animateLight 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, .3);
  @keyframes animateLight{
    0%{
      background-position: -500%;
    }
    25%{
      background-position: 125%;
    }
    50%{
      background-position: 250%;
    }
    75%{
      background-position: 375%;
    }
    100%{
      background-position: 500%;
    }
  }
  `;

