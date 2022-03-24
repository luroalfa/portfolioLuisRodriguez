import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IconContext } from "react-icons";
import {
  FooterSocial,
  FooterContainer,
  FooterLink,
  FooterLiMenu,
  FooterA,
  FooterUl,
  FooterText,
  FooterSubText,
  FooterSpan,
} from "./Styles/FooterElements";
import {
  // FaInstagram,
  FaLinkedinIn,
  // FaYoutube,
  FaHeart,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterSocial>
        <IconContext.Provider value={{ style: { fontSize: "1.25em" } }}>
          <Tooltip title="GitHub" placement="top-start">
            <FooterA href="https://github.com/luroalfa" target="_blank">
              <FaGithub />
            </FooterA>
          </Tooltip>
          <Tooltip title="Linkedin" placement="top-start">
            <FooterA
              href="https://www.linkedin.com/in/rodriguezfallasluis/"
              target="_blank"
            >
              <FaLinkedinIn />
            </FooterA>
          </Tooltip>
        </IconContext.Provider>
      </FooterSocial>

      <FooterUl>
        <FooterLiMenu>
          <FooterLink to="/">About me</FooterLink>
        </FooterLiMenu>
        <FooterLiMenu>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterLiMenu>
        <FooterLiMenu>
          <FooterLink to="/portfolio">Portfolio</FooterLink>
        </FooterLiMenu>
        <FooterLiMenu>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLiMenu>
      </FooterUl>

      <FooterText>Made with</FooterText>

      <FooterText>
        <FooterSpan>
          <FaHeart />
        </FooterSpan>
      </FooterText>

      <FooterSubText>
        © COPYRIGHT 2022. RodríguezFallasLuis. All Rights Reserved.
      </FooterSubText>
    </FooterContainer>
  );
}

export default Footer;
