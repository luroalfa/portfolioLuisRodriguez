import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import { Container, Box } from "./Styles/ContactMeElements.js";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { Animated } from "react-animated-css";

function Contact() {
  return (
    <>
      <Container>
        <Box>Contact me</Box>
        <Box>Image</Box>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
