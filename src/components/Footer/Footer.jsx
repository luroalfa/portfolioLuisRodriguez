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
import { SiTiktok } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <FooterContainer>
      <FooterSocial>
        <IconContext.Provider value={{ style: { fontSize: "1.25em" } }}>
          <SocialIcon href="https://github.com/luroalfa" title="Visit Luis's GitHub Profile" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com/in/rodriguezfallasluis/" title="Connect with Luis on LinkedIn" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://tiktok.com/@soft_developer?lang=en" title="Watch Luis's videos on TikTok" icon={<SiTiktok />} />
          <SocialIcon href="https://wa.me/70529997" title="Contact Luis - Software Developer" icon={<RiWhatsappFill />} />
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
