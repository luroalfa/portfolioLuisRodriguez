import React from "react";
//Components
import Footer from "../../components/Footer/Footer";
import {
  WebsiteTitle,
  WebsiteContainer,
  WebsiteSubContainer,
  WebsiteImage,
  WebsiteSCContain,
  WebsiteContainerButton,
  WebsiteSpan,
  WebsiteContainerTechnology,
  WebsiteTag,
  WebsiteSpanUppercase,
} from "./Styles/WebsiteElements";
import data from "../../store/websitesDB";
import ButtonLink from "components/Button/ButtonLink";

export default function Websites() {
  return (
    <>
      <WebsiteTitle>
        Web<WebsiteSpan>sites</WebsiteSpan>
      </WebsiteTitle>

      <WebsiteContainer>
        {data.cardData.map((item, index) => {
          return (
            <>
              <WebsiteSubContainer>
                <WebsiteImage src={item.img} alt={item.altImg} />
              </WebsiteSubContainer>

              <WebsiteSubContainer>
                <WebsiteSCContain>
                  <WebsiteSpan>Project:</WebsiteSpan>{" "}
                  <WebsiteSpanUppercase>{item.project}</WebsiteSpanUppercase>
                  <br />
                  <br />
                  <WebsiteSpan>Objective:</WebsiteSpan>
                  <br />
                  {item.Objective}
                  <br />
                  <br />
                  <WebsiteSpan>Challenge:</WebsiteSpan>
                  <br />
                  {item.Challenge}
                  <br />
                  <br />
                  <WebsiteSpan>Technologies:</WebsiteSpan>
                  <br />
                  For this project, I used the following technologies to make
                  the website.
                  <WebsiteContainerTechnology>
                    {item.Technologies.map((tag) => (
                      <WebsiteTag>{tag}</WebsiteTag>
                    ))}
                  </WebsiteContainerTechnology>
                  <br />
                  <br />
                  <WebsiteContainerButton>
                    <ButtonLink href={item.link} target="_blank">
                      Vsisit website
                    </ButtonLink>
                    <br />
                    <br />
                  </WebsiteContainerButton>
                </WebsiteSCContain>
              </WebsiteSubContainer>
            </>
          );
        })}
      </WebsiteContainer>
      <Footer></Footer>
    </>
  );
}
