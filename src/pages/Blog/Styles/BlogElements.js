import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const BlogContent = styled.div`
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(28,31,42);
  background: linear-gradient(0deg, rgba(28,31,42,1) 0%, rgba(42,39,28,1) 100%);
  text-align: center;
  @media screen and (max-width: 960px){
    width: 100%;
  }
`;
export const BlogContentArticles = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;
export const BlogInputSearch = styled.input`
  margin-left: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: center;
  border: none;
  padding: 5px;
`;
export const BlogTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size:2em;
  color: white;
`;
export const BlogSearch = styled.div`
  color: white;
`;
export const BlogParagraphTitle = styled.p`
  margin: 10px;
  color: white;
  @media screen and (max-width: 960px){
    text-align: center;
  }
`;
export const BlogCard = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(255, 255, 255, 0.2);
  overflow: hidden;
  width: 330px;
  border: 2px solid white;
  
`;
export const BlogCardHeader = styled.div`
`;
export const BlogImage = styled.img`
width: 100%;
height: 200px;
object-fit: content;
`;
export const BlogCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
  padding: 20px;
  min-height: 50px;
  `;
export const BlogTag = styled.span`
  background: var(--mainColor);
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: white;
  padding: 2px 10px;
  text-transform: uppercase;
  `;
export const BlogTitleCard = styled.h3`
  margin-top:10px;
  text-transform: uppercase;  
  `;
export const BlogParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  `;
export const BlogParagraphPubli = styled.p`
  font-size: 14px;
  margin: 10px 0 30px 0px;
  `;
export const BlogParagraphSpan = styled.span`
  font-weight: 600;
  `;
export const BlogButtom = styled(Link)`
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