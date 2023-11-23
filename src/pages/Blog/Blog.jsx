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
import { Animated } from "react-animated-css";

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
        <Animated
          animationIn="headShake"
          animationOut="fadeOut"
          isVisible={true}
        >
          <BlogTitle>
            My <span>Blog</span>
          </BlogTitle>
        </Animated>
        <BlogParagraphTitle>
          Embark on a journey through the creative and captivating world of me blog, a cozy corner in the vast digital universe. Here, you'll stumble upon a colorful mosaic of stories, practical tips, and personal insights into the world of programming and web design. Whether it's your first foray into the world of code or you're a seasoned enthusiast looking for a fresh perspective, our pages are filled with engaging content crafted just for you. From the simplest tutorials that demystify tech jargon to heartwarming projects that embody the joy of creation, we're here to accompany you on your path to digital craftsmanship. So grab a cup of your favorite brew, settle in, and let's start this adventure together.
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
                  <BlogButtom to={item.link}>
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
