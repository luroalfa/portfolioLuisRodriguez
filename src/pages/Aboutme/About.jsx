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
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import { Animated } from "react-animated-css";
import WOW from "wowjs";

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
            data-wow-offset="3"
            data-wow-iteration="3"
            data-wow-duration="2s"
            data-wow-delay="1.5s"
            src="../img/SoftSkills.png"
          ></FotoSkills>
          <AboutContainer>
            <AboutSubTitle>Who i am?</AboutSubTitle>
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
              I have programming knowledge in javascript and java, in javascript
              with the react framework, I love to use GitHub for my projects and
              keep version control in each one project.
            </NavParagraph>
            <NavParagraph>
              And also I have knowledge in the use of APIs
            </NavParagraph>
            <NavParagraph>
              These are somethings the technologies I like to use in my
              projects:
            </NavParagraph>
            <ContainerStikers>
              <WrapStickers>
                <FotoStikers src="../stikers/html5.png" />
                <AboutLink
                  href="https://developer.mozilla.org/es/docs/Web/HTML"
                  target="_blank"
                >
                  Html
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/css3.png" />
                <AboutLink
                  href="https://developer.mozilla.org/es/docs/Web/CSS"
                  target="_blank"
                >
                  Css3
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/js.png" />
                <AboutLink
                  href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                  target="_blank"
                >
                  JavaScript
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/java.png" />
                <AboutLink
                  href="https://www.java.com/es/download/help/whatis_java.html"
                  target="_blank"
                >
                  Java
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/git.png" />
                <AboutLink href="https://github.com/" target="_blank">
                  GitHub
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/bootstrap.png" />
                <AboutLink href="https://getbootstrap.com/" target="_blank">
                  Boostrap
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/react.png" />
                <AboutLink href="https://es.reactjs.org/" target="_blank">
                  React
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/sc.png" />
                <AboutLink
                  href="https://styled-components.com/"
                  target="_blank"
                >
                  Styled Components
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/MySQL.png" />
                <AboutLink href="https://www.mysql.com/" target="_blank">
                  MySQL
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/mongodb.png" />
                <AboutLink href="https://www.mongodb.com/" target="_blank">
                  MongoDB
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/vs.png" />
                <AboutLink
                  href="https://code.visualstudio.com/"
                  target="_blank"
                >
                  Visual Studio
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/nb.png" />
                <AboutLink href="https://netbeans.apache.org/" target="_blank">
                  NetBeans
                </AboutLink>
              </WrapStickers>
            </ContainerStikers>
          </AboutSkillsContainer>
          <FotoSkills
            className="wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
            src="../img/SkillsBrain.png"
          ></FotoSkills>
        </AboutSkillSection>

        <AboutSkillSection>
          <FotoSkills
            className="wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.5s"
            src="../img/HandDigital.png"
          ></FotoSkills>

          <AboutSkillsContainer>
            <NavParagraph>
              In graphics, videos, sound and web software:
            </NavParagraph>
            <NavParagraph>
              I have been studying web design for a year, where I have acquired
              knowledge in applications as photoshop, illustrator, Adobe XD and
              Figma.
            </NavParagraph>
            <ContainerStikers>
              <WrapStickers>
                <FotoStikers src="../stikers/ai.png" />
                <AboutLink
                  href="https://www.adobe.com/la/products/illustrator.html"
                  target="_blank"
                >
                  Illustrator
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/ps.png" />
                <AboutLink
                  href="https://www.adobe.com/la/products/photoshop.html"
                  target="_blank"
                >
                  Photoshop
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/xd.png" />
                <AboutLink
                  href="https://www.adobe.com/la/products/xd.html"
                  target="_blank"
                >
                  AdobeXD
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/figma.png" />
                <AboutLink href="https://www.figma.com/" target="_blank">
                  Figma
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/filmora.png" />
                <AboutLink
                  href="https://filmora.wondershare.net/es/filmora9-video-editor-es.html"
                  target="_blank"
                >
                  Filmora
                </AboutLink>
              </WrapStickers>
              <WrapStickers>
                <FotoStikers src="../stikers/audacity.png" />
                <AboutLink href="https://www.audacityteam.org/" target="_blank">
                  Audacity
                </AboutLink>
              </WrapStickers>
            </ContainerStikers>
          </AboutSkillsContainer>
        </AboutSkillSection>
      </AboutMain>
      <Footer />
    </>
  );
}

export default About;
