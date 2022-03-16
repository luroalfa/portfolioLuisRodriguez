import React from "react";

import data from "store/galleryBlog.js";
import Footer from "../../components/Footer/Footer";
import {
  BlogContent,
  BlogTitleCard,
  BlogParagraphTitle,
  BlogCard,
  BlogCardBody,
  BlogCardHeader,
  BlogImage,
  BlogParagraph,
  BlogTitle,
  BlogButtom,
  BlogParagraphPubli,
  BlogParagraphSpan,
  BlogSearch,
  BlogContentArticles,
  BlogInputSearch,
} from "./Styles/BlogElements";

function Blog() {
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
      <BlogContent>
        <BlogTitle>
          My <span>Blog</span>
        </BlogTitle>
        <BlogParagraphTitle>
          In this blog you will find topics, articles, guides, projects related
          to programming and web design.
        </BlogParagraphTitle>
        <BlogSearch>
          <BlogInputSearch
            type="text"
            value={filter}
            onChange={onChange.bind(this)}
            placeholder="Search"
          />
        </BlogSearch>

        <BlogContentArticles>
          {dataSearch.map((item, index) => {
            return (
              <BlogCard>
                <BlogCardHeader>
                  <BlogImage src={item.img} alt={item.altDescription} />
                </BlogCardHeader>

                <BlogCardBody>
                  <BlogTitleCard>{item.titleCard}</BlogTitleCard>
                  <BlogParagraph>{item.paragraph}</BlogParagraph>
                  <BlogParagraphPubli>
                    Published:{" "}
                    <BlogParagraphSpan>{item.published}</BlogParagraphSpan>
                  </BlogParagraphPubli>
                  <BlogButtom to="/JavaScriptInterviewsQ">
                    <b>See More</b>
                  </BlogButtom>
                </BlogCardBody>
              </BlogCard>
            );
          })}
        </BlogContentArticles>
      </BlogContent>
      <Footer />
    </>
  );
}

export default Blog;
