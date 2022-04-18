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
  PortfolioTitle,
  PortfolioButtom,
  PortfolioParagraphPubli,
  PortfolioParagraphSpan,
  PortfolioSearch,
  PortfolioContentArticles,
  PortfolioInputSearch,
  PortfolioButtomTagA,
} from "./Styles/PortfolioElements";
import { Animated } from "react-animated-css";

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
        <Animated
          animationIn="headShake"
          animationOut="fadeOut"
          isVisible={true}
        >
          <PortfolioTitle>
            Personal <span>Projects</span>
          </PortfolioTitle>
        </Animated>

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
          As you can see I share some of my personal projects.
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
                  <PortfolioTitleCard>{item.titleCard}</PortfolioTitleCard>
                  {item.paragraph.split("--").map((item) => {
                    return <PortfolioParagraph>{item}</PortfolioParagraph>;
                  })}
                  <PortfolioParagraphPubli>
                    Published:{" "}
                    <PortfolioParagraphSpan>
                      {item.published}
                    </PortfolioParagraphSpan>
                  </PortfolioParagraphPubli>
                  {item.tagA[0] ? (
                    <PortfolioButtomTagA href={item.tagA[1]} target="_self">
                      <b>See More</b>
                    </PortfolioButtomTagA>
                  ) : (
                    <PortfolioButtom to={item.link}>
                      <b>See More</b>
                    </PortfolioButtom>
                  )}
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
