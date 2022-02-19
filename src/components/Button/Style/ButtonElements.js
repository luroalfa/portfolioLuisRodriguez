import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtomStyle = styled(Link)`
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