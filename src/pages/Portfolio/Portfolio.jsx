import React from "react";
import Footer from "../../components/Footer/Footer";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import {
  PortfolioCardTitle,
  PortfolioContainerDescription,
  PortfolioContainerTecnologies,
  PortfolioDescription,
  PortfolioFront,
  PortfolioHeroImage,
  PortfolioImage,
  PortfolioImageTecnologies3,
  PortfolioSection,
  PortfolioCard,
  PortfolioBack,
  PortfolioStreamingInfo,
  PortfolioParagraph,
  PortfolioCardButton,
  PortfolioBackground,
  PortfolioImageTechnology,
} from "./Styles/PortfolioElements";
import imgTechnologies from "../../Assets/Technologies/technologies.js";
import imgPortfolioProjects from "../../Assets/GalleryPortfolio/galleryPortfolioProjects.js";

function Portfolio() {
  return (
    <>
      <PortfolioHeroImage></PortfolioHeroImage>

      <PortfolioSection>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.improex} />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.lactgourmet} />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.art1} />
            <PortfolioCardTitle>Vectorization</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTechnology src={imgTechnologies.css} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTechnology src={imgTechnologies.css} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.art2} />
            <PortfolioCardTitle>Vectorization</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.yoVector} />
            <PortfolioCardTitle>Vectorization</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.improex} />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.improex} />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src={imgPortfolioProjects.improex} />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Technologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies3 src={imgTechnologies.css} />
                <PortfolioImageTecnologies3 src={imgTechnologies.html} />
                <PortfolioImageTecnologies3 src={imgTechnologies.js} />
              </PortfolioContainerTecnologies>
            </PortfolioContainerDescription>
          </PortfolioFront>

          <PortfolioBack>
            <PortfolioStreamingInfo>
              <PortfolioParagraph>
                Este es un proyecto hecho con css, html y javascript.
              </PortfolioParagraph>
            </PortfolioStreamingInfo>
            <PortfolioCardButton>See website</PortfolioCardButton>
            <PortfolioContainerTecnologies>
              <PortfolioImageTecnologies3 src={imgTechnologies.css} />
              <PortfolioImageTecnologies3 src={imgTechnologies.html} />
              <PortfolioImageTecnologies3 src={imgTechnologies.js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
      </PortfolioSection>

      <Footer />
    </>
  );
}

export default Portfolio;
