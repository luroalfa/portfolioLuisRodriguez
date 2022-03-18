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
              I'm a web developer from Costa Rica who is mainly interested in
              web technologies, especially in frontend development.
            </NavParagraph>
            <NavParagraph>
              I have a passion for web development, I leverage my knowledge to
              create things interesting.
            </NavParagraph>
            <NavParagraph>
              I enjoy sharing my knowledge and helping others when possible.
            </NavParagraph>
            <StyleLink
              href="https://rodriguezfallasluis.com/static/media/CV.a73fe940141110087d6e.pdf"
              target="_blank"
            >
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
              I have programming knowledge in javascript, in javascript with the
              react framework, I love to use GitHub for my projects and keep
              version control in each one project.
            </NavParagraph>
            <NavParagraph>
              And also I have knowledge in the use of APIs.
            </NavParagraph>
            <NavParagraph>
              These are somethings the technologies I like to use in my
              projects:
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
              In graphics, videos, sound and web software:
            </NavParagraph>
            <NavParagraph>
              I have been studying web design for a year, where I have acquired
              knowledge in applications as photoshop, illustrator, Adobe XD and
              Figma.
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
