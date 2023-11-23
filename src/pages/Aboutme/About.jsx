import React from "react";
import HeroMainSection from "../../components/HeroSection/HeroMainSection";
import Footer from "../../components/Footer/Footer.jsx";
import {
  AboutContainer,
  AboutSkillsContainer,
  AboutMainSection,
  FotoSkills,
  FotoStikers,
  AboutTitle,
  AboutMain,
  SkillsTitle,
  AboutSkillSection,
  ContainerStikers,
  AboutSubTitle,
  NavParagraph,
  WrapStickers,
  AboutLink,
} from "./Styles/AboutmeElements";
// import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
// import { Animated } from "react-animated-css";
import WOW from "wowjs";
import data from "../../store/technologyData";
import StyleLink from "components/Link/Link";
import { BsArrowReturnRight } from "react-icons/bs";

new WOW.WOW().init();

function About() {
  return (
    <>
      <HeroMainSection />
      <AboutMain>
        <AboutTitle>About me</AboutTitle>
        <AboutMainSection>
          {/* <YoutubeEmbed embedId="58479"/> */}
          <FotoSkills
            className="wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
            src="../img/SoftSkills.webp"
          ></FotoSkills>
          <AboutContainer>
            <AboutSubTitle>Who I am?</AboutSubTitle>
            <br />
            <NavParagraph>
              I'm a Software Developer based in Costa Rica. Passionate about technology, I use my expertise to create intriguing and innovative solutions.
            </NavParagraph>
            <NavParagraph>
              Driven by my enthusiasm for software development, I continually seek opportunities to expand my knowledge and skills.
            </NavParagraph>
            <NavParagraph>
              It's also a great pleasure for me to share my insights and assist others whenever possible.
            </NavParagraph>
            <StyleLink href="/pdf" target="_self">
              <BsArrowReturnRight /> Download CV
            </StyleLink>
          </AboutContainer>
        </AboutMainSection>

        <SkillsTitle>Hard Skills</SkillsTitle>
        <AboutSkillSection>
          <AboutSkillsContainer>
            <AboutSubTitle>What I know.</AboutSubTitle>
            <br />
            <NavParagraph>
              In programming language and remote jobs:
            </NavParagraph>
            <NavParagraph>
              I have experience in the programming languages JavaScript and Python, and I have worked with APIs in both environments, using Express with JavaScript and FastAPI with Python. 
            </NavParagraph>
            <NavParagraph>
              These are some of the technologies that I prefer to use in my projects:
            </NavParagraph>
            <ContainerStikers>
              {data.programmingLanguagesData.map((item, index) => {
                return (
                  <WrapStickers>
                    <FotoStikers src={item.img} />
                    <AboutLink href={item.url} target="_blank">
                      {item.name}
                    </AboutLink>
                  </WrapStickers>
                );
              })}
            </ContainerStikers>
          </AboutSkillsContainer>
          <FotoSkills
            className="wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
            src="../img/SkillsBrain.webp"
          ></FotoSkills>
        </AboutSkillSection>

        <AboutSkillSection>
          <FotoSkills
            className="wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.5s"
            src="../img/HandDigital.webp"
          />

          <AboutSkillsContainer>
            <AboutSubTitle>Others software like.</AboutSubTitle>
            <br />
            <NavParagraph>
              In the realm of graphics, videos, sound, and web software:
            </NavParagraph>
            <NavParagraph>
              With several years of experience in web design, I have developed strong skills in applications such as Photoshop, Illustrator, Adobe XD, and Figma. My professional journey includes a variety of projects where I have applied these skills to create visually appealing and functional solutions
            </NavParagraph>
            <ContainerStikers>
              {data.softwareData.map((item, index) => {
                return (
                  <WrapStickers>
                    <FotoStikers src={item.img} />
                    <AboutLink href={item.url} target="_blank">
                      {item.name}
                    </AboutLink>
                  </WrapStickers>
                );
              })}
            </ContainerStikers>
          </AboutSkillsContainer>
        </AboutSkillSection>
      </AboutMain>
      <Footer />
    </>
  );
}

export default About;
