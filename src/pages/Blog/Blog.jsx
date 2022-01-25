import React from "react";
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
  BlogTag,
  BlogTitle,
  BlogButtom,
  BlogParagraphPubli,
  BlogParagraphSpan,
  BlogSearch,
  BlogContentArticles,
  BlogInputSearch,
} from "./Styles/BlogElements";
import data from "../../Assets/GalleryBlog/galleryBlog.js";

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
        <BlogTitle>MyBlog</BlogTitle>
        <BlogParagraphTitle>
          In this blog you will find topics, articles, guides, projects related
          to programming and web design. We will be talking about Html, Css,
          JavaScript, Photoshop, Illustrator, Figma and other topics.
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
                  <BlogTag>{item.tag}</BlogTag>
                  <BlogTitleCard>{item.titleCard}</BlogTitleCard>
                  <BlogParagraph>{item.paragraph}</BlogParagraph>
                  <BlogParagraphPubli>
                    Published:{" "}
                    <BlogParagraphSpan>{item.published}</BlogParagraphSpan>
                  </BlogParagraphPubli>
                  <BlogButtom to="">
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
