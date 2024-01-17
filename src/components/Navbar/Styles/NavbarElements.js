import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--mainColor);
  border-bottom: solid 1px var(--secondaryColor);
  position: fixed;
  z-index: 1000;
`;

export const NavText = styled.p`
  margin-bottom: 0;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const Logo = styled.img`
  width: 5%;
  margin-right: 0.5rem;
`;

export const LogoContainer = styled(Link)`
  margin-left: 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Cinzel Decorative";

  p {
    &:nth-child(2) {
      color: white;
    }

    &:nth-child(3) {
      color: var(--secondaryColor);
      font-weight: 500;
    }
  }
  svg {
    fill: var(--secondaryColor);
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: var(--mainColor);
    position: absolute;
    top: 50px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: white;
  transition: 0.5s all ease;

  &:hover {
    font-weight: 300;
    color: var(--secondaryColor);
    transition: 0.5s all ease;
    svg {
      fill: var(--mainColor);
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #c99700;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 20%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    svg {
      fill: #c99700;
      margin-right: 0.5rem;
    }
  }
`;
