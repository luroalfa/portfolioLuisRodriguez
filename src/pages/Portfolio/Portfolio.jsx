
// import imgTechnologies from "../../Assets/Technologies/technologies.js";
// import imgPortfolioProjects from "../../Assets/GalleryPortfolio/galleryPortfolioProjects.js";
import React from "react";
import Footer from "../../components/Footer/Footer";
import {
  PortfolioContent,
  PortfolioTitleCard,
  PortfolioParagraphTitle,
  PortfolioCard,
  PortfolioCardBody,
  PortfolioCardHeader,
  PortfolioImage,
  PortfolioParagraph,
  PortfolioTag,
  PortfolioTitle,
  PortfolioButtom,
  PortfolioParagraphPubli,
  PortfolioParagraphSpan,
  PortfolioSearch,
  PortfolioContentArticles,
  PortfolioInputSearch,
  PortfolioContainerTag,
} from "./Styles/PortfolioElements";
import data from "../../Assets/GalleryPortfolio/galleryPortfolio.js";

function Portfolio() {
  const [filter, setfilters] = React.useState("");
  
  const onChange = (e) => {
    setfilters(e.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <PortfolioContent>
        <PortfolioTitle>Projects</PortfolioTitle>
        <PortfolioParagraphTitle>
          In this Portfolio you will find topics, articles, guides, projects related
          to programming and web design. We will be talking about Html, Css,
          JavaScript, Photoshop, Illustrator, Figma and other topics.
        </PortfolioParagraphTitle>
        <PortfolioSearch>
          <PortfolioInputSearch
            type="text"
            value={filter}
            onChange={onChange.bind(this)}
            placeholder="Search"
          />
        </PortfolioSearch>

        <PortfolioContentArticles>
          {dataSearch.map((item, index) => {
            return (
              <PortfolioCard>
                <PortfolioCardHeader>
                  <PortfolioImage src={item.img} alt={item.altDescription} />
                </PortfolioCardHeader>

                <PortfolioCardBody>
                  <PortfolioContainerTag>
                    <PortfolioTag>{item.tag}</PortfolioTag>
                  </PortfolioContainerTag>
                  <PortfolioTitleCard>{item.titleCard}</PortfolioTitleCard>
                  <PortfolioParagraph>{item.paragraph}</PortfolioParagraph>
                  <PortfolioParagraphPubli>
                    Published:{" "}
                    <PortfolioParagraphSpan>{item.published}</PortfolioParagraphSpan>
                  </PortfolioParagraphPubli>
                  <PortfolioButtom to="">
                    <b>See More</b>
                  </PortfolioButtom>
                </PortfolioCardBody>
              </PortfolioCard>
            );
          })}
        </PortfolioContentArticles>
      </PortfolioContent>
      <Footer />
    </>
  );
}

export default Portfolio;
