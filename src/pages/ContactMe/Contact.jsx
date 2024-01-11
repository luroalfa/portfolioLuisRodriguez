import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import {
  Container,
  Title,
  Description,
  Link,
} from "./Styles/ContactMeElements.js";
import Avatar from "@mui/material/Avatar";
import { Animated } from "react-animated-css";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import TelegramIcon from "@mui/icons-material/Telegram";
import photo from "../../Assets/img/contact/LUIS-CIRCLE.webp";

const AnimatedLink = ({ href, label, icon, text, delay }) => (
  <Animated
    animationIn="bounceIn"
    animationInDelay={delay}
    isVisible={true}
  >
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {React.cloneElement(icon, { style: { marginRight: "10px" } })}
      {text}
    </Link>
  </Animated>
);

function Contact() {
  const linksInfo = [
    { href: "https://wa.me/50670529997", icon: <WhatsAppIcon />, text: "Whatsapp", label: "Contact me on WhatsApp", delay: 100 },
    { href: "https://rodriguezfallasluis.com", icon: <LanguageIcon />, text: "Web Site", label: "Visit my website", delay: 200 },
    { href: "https://github.com/luroalfa", icon: <GitHubIcon />, text: "GitHub", label: "View my GitHub profile", delay: 300 },
    { href: "https://linkedin.com/in/rodriguezfallasluis/", icon: <LinkedInIcon />, text: "LinkedIn", label: "Connect with me on LinkedIn", delay: 400 },
    { href: "tel:+50670529997", icon: <LocalPhoneIcon />, text: "Phone", label: "Call me", delay: 500 },
    { href: "mailto:rodriguezfallasluis@gmail.com", icon: <AlternateEmailIcon />, text: "Email", label: "Send me an email", delay: 600 },
    { href: "https://t.me/@RodriguezFallasLuis", icon: <TelegramIcon />, text: "Telegram", label: "Message me on Telegram", delay: 700 },
    { href: "https://www.google.com/maps?q=10.015994750389856,-84.21463098667155", icon: <MyLocationIcon />, text: "Location", label: "See my location on the map", delay: 800 }
  ]; 

  return (
    <>
      <Container>
        <Avatar
          alt="Luis Rodriguez"
          src={photo}
          sx={{ width: 200, height: 200 }}
        />
        <Title>Software Developer</Title>
        <Description>
          Software Developer with a passion for innovation and problem-solving.
          Check out my portfolio and contact me.
        </Description>
        {linksInfo.map((link, index) => (
          <AnimatedLink key={index} {...link} />
        ))}
      </Container>
      <Footer />
    </>
  );
}


export default Contact;
