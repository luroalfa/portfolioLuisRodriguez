import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 80%;
  height: 100%;
  padding-top: 60px;
  padding-right: 20px;
  padding-left: 20px;
  margin: auto;

  text-align: center;

  background: rgb(28, 31, 42);
  background: linear-gradient(
    0deg,
    rgba(28, 31, 42, 1) 0%,
    rgba(42, 39, 28, 1) 100%
  );

  @media screen and (max-width: 960px) {
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
  font-size: 2.5em;
  color: white;
  span {
    color: var(--secondaryColor);
  }
`;
export const BlogSearch = styled.div`
  color: white;
`;
export const BlogParagraphTitle = styled.p`
  margin: 10px;
  color: white;
  width: 100%;
  @media screen and (max-width: 960px) {
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
  min-height: 450px;
`;
export const BlogCardHeader = styled.div``;
export const BlogImage = styled.img`
  width: ${(props)=>props.width || "100%"};
  height: 200px;
  object-fit: ${(props)=>props.objectFit || "content"};
`;

export const BlogCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  align-items: flex-start;
  padding: 20px;
  min-height: 50px;
  flex-grow: 1;
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
  color: ${(props) => props.color || "black"};
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  span {
    color: var(--secondaryColor);
    display: block;
  }
`;
export const BlogParagraph = styled.p`
  color: ${(props) => props.color || "black"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;
  overflow-wrap: break-word;
`;
export const BlogParagraphPubli = styled.p`
  font-size: 14px;
  margin: 10px 0 30px 0px;
  margin-bottom: 5px;
`;
export const BlogParagraphSpan = styled.span`
  font-size: 0.8em;
  font-weight: 600;
`;
export const BlogButtom = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
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

export const PreStyled = styled.pre`
  background-color: #323940;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;  
  overflow-x: auto;
  white-space: pre-wrap;
  width: 80%;
  height: 100%;
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
`;

export const CodeStyled = styled.code`
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
`;
