import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ContactContainer = styled.section`
padding-top: 70px;
width: 90%;
height:100vh;
margin: auto;
background: rgb(28,31,42);
background: linear-gradient(0deg, rgba(28,31,42,1) 0%, rgba(42,39,28,1) 100%);
color: white;
@media screen and (min-width: 960px){
  width: 80%;
}
`;

export const ContactTitleForm = styled.h2`
  font-size: 3em;
  text-align: center;
  margin-top:20px;
  span{
    color:var(--secondaryColor);
  }
  `;
export const ContactSubTitleForm = styled.h4`
  text-align: center;
  `;

export const ContactGroup = styled.div`
  box-shadow: 0 0 20px rgba(255, 255, 255, .3);
  margin: 50px;
  border-radius: 20px;
  @media screen and (min-width: 960px){
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  `;
export const ContactForm = styled.div`
  background: var(--colorLight);  
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px; 
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 960px){
  border-top-left-radius: 20px; 
  border-bottom-left-radius: 20px; 
  }
  `;
export const ContactParagraph = styled.p`
  font-size:.8em;
  margin: 0;
  padding: 1em;
  @media screen and (min-width: 960px){
    padding: 2em;
  }
  `;
export const ContactParagraphTextArea = styled.p`
  font-size:.8em;
  margin: 0;
  padding: 1em;
  grid-column: 1/3;
  @media screen and (min-width: 960px){
    padding: 2em;
  }
  `;
export const ContactParagraphButtom = styled.p`
  margin: 0;
  padding: 1em;
  grid-column: 1/3;
  @media screen and (min-width: 960px){
    padding: 2em;
  }
  `;

export const ContactInput = styled.input`
  color: white;
  width: 100%;
  padding: .7em;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid var(--secondaryColor);
  `;

export const ContactTextArea = styled.textarea`
  color: white;
  width: 100%;
  padding: .7em;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid var(--secondaryColor);
  grid-column: 1/3;
  `;

export const ContactButtom = styled.button`
  color: black;
  width: 100%;
  background: var(--secondaryColor);
  border: 0;
  text-transform: uppercase;
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    color: white;
    background: black;
    transition: background-color .5s ease-out;
    outline: 0;
  }
  &:focus{
    color: white;
    background: black;
    transition: background-color .5s ease-out;
    outline: 0;
  }
  `;

export const ContactInfo = styled.div`
  font-size:.8em;
  background: var(--colorDark); 
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px; 
  text-align: center;
  padding: 1em;
  @media screen and (min-width: 960px){
  border-top-right-radius: 20px; 
  border-bottom-right-radius: 20px; 
  }
  `;

export const ContactInfoTitle = styled.h3`
    margin: 0 0 1rem 0;
    font-size: 1.5em;
    @media screen and (min-width: 960px){
      text-align: left;
      margin-left: 20px;
    }
    `;
export const ContactInfoSubTitle = styled.h4`
  font-size: 1.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
  export const ContactInfoUl = styled.ul`
    margin: 0 0 1rem 0;
    padding: 0;
    list-style: none;
    @media screen and (min-width: 960px){
      margin-left: 20px;
      text-align: left;
    }
    `;
  export const ContactInfoLI = styled.li`
    padding: .3em;
    @media screen and (min-width: 960px){
      & span{
      margin-left: 15px;
    }
    }
    
  `;

//Link of react-router-dom
export const  ContactLink = styled(Link)`
margin-top: 10px;
text-decoration: underline;
color: white;
display: inline-block;
padding: 0 15px;
text-decoration: underline;
margin-bottom: 10px;
&:hover{
  color:var(--secondaryColor);
}
`;
  

  