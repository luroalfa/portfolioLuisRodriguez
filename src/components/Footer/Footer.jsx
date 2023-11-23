import * as React from "react";
import { IconContext } from "react-icons";
import SocialIcon from "./SocialIcon"
import {
  FooterSocial,
  FooterContainer,
  FooterText,
  FooterSubText,
  FooterSpan,
} from "./Styles/FooterElements";
import {
  FaLinkedinIn,
  FaHeart,
  FaGithub,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <FooterContainer>
      <FooterSocial>
        <IconContext.Provider value={{ style: { fontSize: "1.25em" } }}>
          <SocialIcon href="https://github.com/luroalfa" title="GitHub" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com/in/rodriguezfallasluis/" title="Linkedin" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://instagram.com/rodriguezfallasluis/" title="Instagram" icon={<AiFillInstagram />} />
          <SocialIcon href="https://tiktok.com/@soft_developer?lang=en" title="Tiktok" icon={<SiTiktok />} />
        </IconContext.Provider>
      </FooterSocial>
      <FooterText>Made with</FooterText>
      <FooterText>
        <FooterSpan>
          <FaHeart />
        </FooterSpan>
      </FooterText>
      <FooterSubText>© COPYRIGHT {new Date().getFullYear()}.</FooterSubText>
    </FooterContainer>
  );
}

export default Footer;
