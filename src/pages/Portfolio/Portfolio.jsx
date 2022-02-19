//Libs
import React from "react";
//Utils
import data from "store/galleryPortfolio";
import GlobalUtils from "utils/GlobalUtils";
//Components
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
        <PortfolioTitle>Personal Projects</PortfolioTitle>
        <PortfolioParagraphTitle>
          <b>
            <i>
              "He who learns and learns and does not practice what he knows is
              like the one who plows and plows and does not sow."
            </i>
          </b>
          <br />
          -By Platón.
          <br />
          Here's a list of some of my personal projects.
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
          {GlobalUtils.checkArray(dataSearch).map((item, index) => {
            return (
              <PortfolioCard>
                <PortfolioCardHeader>
                  <PortfolioImage src={item.img} alt={item.altDescription} />
                </PortfolioCardHeader>

                <PortfolioCardBody>
                  <PortfolioContainerTag>
                    {GlobalUtils.checkArray(item.tags).map((tag) => (
                      <PortfolioTag>{tag}</PortfolioTag>
                    ))}
                  </PortfolioContainerTag>
                  <PortfolioTitleCard>{item.titleCard}</PortfolioTitleCard>
                  <PortfolioParagraph>{item.paragraph}</PortfolioParagraph>
                  <PortfolioParagraphPubli>
                    Published:{" "}
                    <PortfolioParagraphSpan>
                      {item.published}
                    </PortfolioParagraphSpan>
                  </PortfolioParagraphPubli>
                  <PortfolioButtom to={item.link}>
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
