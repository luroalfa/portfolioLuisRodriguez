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
  PortfolioImageTecnologies,
  // PortfolioRank,
  PortfolioSection,
  PortfolioCard,
  PortfolioBack,
  PortfolioStreamingInfo,
  PortfolioParagraph,
  PortfolioCardButton,
  PortfolioBackground,
} from "./Styles/PortfolioElements";
import js from "../../Assets/Tecnologies/js.png";
import css from "../../Assets/Tecnologies/css.png";
import html from "../../Assets/Tecnologies/html.png";

function Portfolio() {
  return (
    <>
      <PortfolioHeroImage></PortfolioHeroImage>

      <PortfolioSection>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/SkillsBrain.png" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
            </PortfolioContainerTecnologies>
          </PortfolioBack>
          <PortfolioBackground />
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioFront>
            <PortfolioImage src="./img/space.jpg" />
            <PortfolioCardTitle>Website</PortfolioCardTitle>
            <PortfolioContainerDescription>
              <PortfolioDescription>Tecnologies:</PortfolioDescription>
              <PortfolioContainerTecnologies>
                <PortfolioImageTecnologies src={css} />
                <PortfolioImageTecnologies src={html} />
                <PortfolioImageTecnologies src={js} />
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
              <PortfolioImageTecnologies src={css} />
              <PortfolioImageTecnologies src={html} />
              <PortfolioImageTecnologies src={js} />
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
