import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BtnRouter = styled(Link)`
  cursor= pointer;
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
export const SquareBtnRouter = styled(Link)`
  cursor= pointer;
  background-color: var(--secondaryColor);
  text-transform: uppercase;  
  border: none;
  color: black;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  text-transform: uppercase;
  &:hover{
    background: var(--mainColor);
    color: white;    
    border: 1px solid white;
  }
`;

export const BtnLink = styled.a`
  cursor= pointer;
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
