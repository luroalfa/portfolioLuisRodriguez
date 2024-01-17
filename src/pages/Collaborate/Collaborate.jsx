import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Footer from "../../components/Footer/Footer";
import { Title, Container } from "./Styles/CollaborateStyle";

import LandingPageImg from "../../Assets/img/collaborate/LandingPage.webp";
import ConsejeriaImg from "../../Assets/img/collaborate/Consejeria.png";
import WebsiteImg from "../../Assets/img/collaborate/website.png";
import UiUx from "../../Assets/img/collaborate/uiux.png";
import EcommerceImg from "../../Assets/img/collaborate/ecommerce.png";
import DesingImg from "../../Assets/img/collaborate/desing.png";
import CorporationImg from "../../Assets/img/collaborate/Corporation.png";
import ButtonRouter from "../../components/Button/ButtonRouter";
import { Animated } from "react-animated-css";
import RecipeReviewCard from "../../components/Card/RecipeReviewCard";
// Asegúrate de reemplazar 'ruta/donde/esta' con la ruta real del archivo




function Collaborate() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    {
      title: "Custom Digital Consulting",
      subheader: "Expert guidance for your digital presence.",
      image: ConsejeriaImg,
      description:
        "Custom Digital Consulting provides tailored strategies to boost your online presence. We guide you through vital web development steps, from domain selection to optimal hosting, ensuring an effective online presence that aligns with your goals.",
      price: "$50 + IVA (₡25.000 + IVA)",
      service_details:
        "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    },
    {
      title: "Landing Page",
      subheader: "Elevate Your Online Presence.",
      image: LandingPageImg,
      price: "$100 + IVA (₡50.000 + IVA)",
      description:
        "In our digital era, the first impression of your business occurs online, and a well-designed landing page is crucial for capturing and retaining your audience's attention. I specialize in developing customized landing pages that not only look impressive but also function flawlessly.",
      service_details:
        "Specializing in landing page development, I offer a comprehensive service that begins with a personalized consultation to capture the essence of your brand and objectives. I create attractive and conversion-optimized designs, ensuring that each page functions flawlessly across all devices and is optimized for SEO. Additionally, I incorporate advanced integrations tailored to your needs and conduct rigorous testing to guarantee an impeccable user experience. The service is completed with post-launch support and performance analysis, ensuring that your landing page not only attracts visitors but also converts them into customers.",
    },
    // {
    //   title: "Website",
    //   subheader: "Elevate Your Online Presence.",
    //   image: WebsiteImg,
    //   price: "$500 + IVA (₡250.000 + IVA)",
    //   description:
    //     "This service includes crafting a personalized landing page for your business. We offer a comprehensive consultation, analyzing your goals. It highlights your offerings and includes a clear call to action. You also enjoy all benefits from the Standard Consultation.",
    //   service_details:
    //     "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    // },
    // {
    //   title: "E-commerce",
    //   subheader: "Elevate Your Online Presence.",
    //   image: EcommerceImg,
    //   price: "$2500 + IVA (₡1,250.000 + IVA)",
    //   description:
    //     "This service includes crafting a personalized landing page for your business. We offer a comprehensive consultation, analyzing your goals. It highlights your offerings and includes a clear call to action. You also enjoy all benefits from the Standard Consultation.",
    //   service_details:
    //     "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    // },
    // {
    //   title: "UI/UX Design",
    //   subheader: "Elevate Your Online Presence.",
    //   image: UiUx,
    //   price: "$500 + IVA (₡250.000 + IVA)",
    //   description:
    //     "This service includes crafting a personalized landing page for your business. We offer a comprehensive consultation, analyzing your goals. It highlights your offerings and includes a clear call to action. You also enjoy all benefits from the Standard Consultation.",
    //   service_details:
    //     "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    // },
    // {
    //   title: "Graphic Design",
    //   subheader: "Elevate Your Online Presence.",
    //   image: DesingImg,
    //   price: "$500 + IVA (₡250.000 + IVA)",
    //   description:
    //     "This service includes crafting a personalized landing page for your business. We offer a comprehensive consultation, analyzing your goals. It highlights your offerings and includes a clear call to action. You also enjoy all benefits from the Standard Consultation.",
    //   service_details:
    //     "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    // },
    // {
    //   title: "Corporate Identity Design",
    //   subheader: "Elevate Your Online Presence.",
    //   image: CorporationImg,
    //   price: "$500 + IVA (₡250.000 + IVA)",
    //   description:
    //     "This service includes crafting a personalized landing page for your business. We offer a comprehensive consultation, analyzing your goals. It highlights your offerings and includes a clear call to action. You also enjoy all benefits from the Standard Consultation.",
    //   service_details:
    //     "You will receive a comprehensive service that includes a written report detailing the key points discussed during the consultation, personalized recommendations, a clear roadmap to help you achieve your online objectives, specific strategies aligned with your business and goals, guidance on best practices in web development and online presence, as well as the resolution of doubts and additional clarifications to ensure your understanding.",
    // },
  ];

  return (
    <>
      <Container>
        <Title>
          <span>My</span> Services
        </Title>
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {services.map((service, index) => (
            <RecipeReviewCard key={index} {...service} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Collaborate;
