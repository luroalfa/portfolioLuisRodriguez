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
} from "./Styles/BlogElements";
import imgs from "../../Assets/GalleryBlog/galleryBlog.js";

function Blog() {
  //  const [cursos, setCursos] = React.useState([])

  // React.useEffect(() => {

  //   axios.get("https://lambda.com/cursos").then(response => {
  //     setCursos(response.data)
  //   })

  // }, [])

  return (
    <>
      {/* {cursos.map(curso =>
      
      )} */}
      <BlogContent>
        <BlogTitle>MyBlog</BlogTitle>
        <BlogParagraphTitle>
          In this blog you will find topics, articles, guides, projects related
          to programming and web design. We will be talking about Html, Css,
          JavaScript, Photoshop, Illustrator, Figma and other topics.
        </BlogParagraphTitle>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.html} alt="image html" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Html</BlogTag>
            <BlogTitleCard>Interview questions</BlogTitleCard>
            <BlogParagraph>
              This article covers the most frequently asked HTML and HTML5
              questions asked in interviews.
              {/* https://www.interviewbit.com/html-interview-questions/ */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.css} alt="image css" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Css</BlogTag>
            <BlogTitleCard>Interview questions</BlogTitleCard>
            <BlogParagraph>
              This article covers the most frequently asked CSS and CSS3
              interview questions.
              {/* https://www.interviewbit.com/css-interview-questions/#box-model-in-css */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.js} alt="image js" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>JavaScript</BlogTag>
            <BlogTitleCard>Interview questions</BlogTitleCard>
            <BlogParagraph>
              JavaScript interview questions, which are likely to be asked
              during the interview.
              {/* https://www.guru99.com/javascript-interview-questions-answers.html */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.photoshop} alt="image photoshop" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Photoshop</BlogTag>
            <BlogTitleCard>Must-Know Shortcuts</BlogTitleCard>
            <BlogParagraph>
              These are commands that are easy to pull off, and they will
              certainly speed up your productivity.
              {/* https://photoshoptrainingchannel.com/photoshop-keyboard-shortcuts/ */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.illustrator} alt="image illustrator" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Illustrator</BlogTag>
            <BlogTitleCard>Must-Know Shortcuts</BlogTitleCard>
            <BlogParagraph>
              These shortcuts for handling layers, text and more are guaranteed
              to speed your productivity!
              {/* https://www.creativebloq.com/illustrator/shortcuts-5132938 */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.figma} alt="image figma" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Figma</BlogTag>
            <BlogTitleCard>Figma plugins</BlogTitleCard>
            <BlogParagraph>
              Figma plugins are a recent addition to what's becoming the go-to
              collaborative tool for the designers.
              {/* https://pavvydesigns.com/2019/09/15/6-figma-plugins-to-give-you-design-superpowers-and-how-to-use-them/ */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.mysql} alt="image mysql" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>MySQL</BlogTag>
            <BlogTitleCard>My first database</BlogTitleCard>
            <BlogParagraph>
              MySQL is the world's most popular open-source database. MySQL is
              simple to set up and easy to use.
              {/* https://dev.mysql.com/doc/mysql-getting-started/en/ */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.mogodb} alt="image mongoDB" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>MOBGODB</BlogTag>
            <BlogTitleCard>MongoDB Performance FAQ</BlogTitleCard>
            <BlogParagraph>
              If you only have a few minutes to spare, this quick performance
              FAQ might be useful.
              {/* https://www.mongodb.com/basics/best-practices */}
              {/* https://www.roihunter.com/blog/5-successful-tips-you-need-to-optimize-mongodb */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.github} alt="image github" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>GITHUB</BlogTag>
            <BlogTitleCard>
              10 Common Git Commands Everyone Should Know
            </BlogTitleCard>
            <BlogParagraph>
              Github plays an important role in any development project.
              {/* https://blog.testproject.io/2021/03/22/git-commands-every-sdet-should-know/ */}
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage
              src={imgs.styledcomponents}
              alt="image styled components"
            />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>Styled Components</BlogTag>
            <BlogTitleCard>How to use styled components?</BlogTitleCard>
            <BlogParagraph>
              A little introduction on how to use styled components.
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogImage src={imgs.english} alt="image English" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogTag>English</BlogTag>
            <BlogTitleCard>Something about english</BlogTitleCard>
            <BlogParagraph>
              In this article, you will find information about topics basic in
              English.
            </BlogParagraph>
            <BlogParagraphPubli>
              Published:{" "}
              <BlogParagraphSpan>
                Friday, January, 14th, 2022.
              </BlogParagraphSpan>
            </BlogParagraphPubli>
            <BlogButtom to="">
              <b>See More</b>
            </BlogButtom>
          </BlogCardBody>
        </BlogCard>
      </BlogContent>
      <Footer />
    </>
  );
}

export default Blog;
