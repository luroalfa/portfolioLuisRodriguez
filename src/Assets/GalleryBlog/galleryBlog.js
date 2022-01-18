import Html from './html.jpg'
import Css from './css.jpg'
import Javascript from './javascript.jpg'
import Illustrator from './ai.png'
import Photoshop from './photoshop.jpg'
import Figma from './figma.png'
import Github from './github.jpg'
import Mongodb from './mongodb.png'
import Mysql from './mysql.png'
import StyledComponents from './styledcomponents1.png'
import English from './English.jpg'


// export default{
//   "illustrator": Illustrator,
//   "css": Css,
//   "english": English,
//   "figma": Figma,
//   "github": Github,
//   "html": Html,
//   "js": Javascript,
//   "mogodb": Mongodb,
//   "mysql": Mysql,
//   "photoshop": Photoshop,
//   "styledcomponents": StyledComponents,
// }

const data = {
  cardData:[
    {
      id:1,
      img: Html,
      altDescription:"Image html",
      tag: 'Html',
      titleCard: 'Interview questions',
      paragraph: 'This article covers the most frequently asked HTML and HTML5 questions asked in interviews.',
      published: 'Friday, January, 14th, 2022.',
      // https://www.interviewbit.com/html-interview-questions/
    },
    {
      id:2,
      img: Css,
      altDescription:"Image Css",
      tag: 'Css',
      titleCard: 'Interview questions',
      paragraph: 'This article covers the most frequently asked CSS and CSS3 interview questions.',
      published: 'Friday, January, 14th, 2022.',
      // https://www.interviewbit.com/css-interview-questions/#box-model-in-css
    },
    {
      id:3,
      img: Javascript,
      altDescription:"Image JavaScript",
      tag: 'JavaScript',
      titleCard: 'Interview questions',
      paragraph: 'JavaScript interview questions, which are likely to be asked during the interview.',
      published: 'Friday, January, 14th, 2022.',
      // https://www.guru99.com/javascript-interview-questions-answers.html
    },
    {
      id:4,
      img: Photoshop,
      altDescription:"Image PhotoShop",
      tag: 'Photoshop',
      titleCard: 'MUST-KNOW SHORTCUTS',
      paragraph: 'These are commands that are easy to pull off, and they will certainly speed up your productivity.',
      published: 'Friday, January, 14th, 2022.',
      // https://photoshoptrainingchannel.com/photoshop-keyboard-shortcuts/
    },
    {
      id:5,
      img: Illustrator,
      altDescription:"Image Illustrator",
      tag: 'Illustrator',
      titleCard: 'MUST-KNOW SHORTCUTS',
      paragraph: 'These shortcuts for handling layers, text and more are guaranteed to speed your productivity!',
      published: 'Friday, January, 14th, 2022.',
      // https://www.creativebloq.com/illustrator/shortcuts-5132938
    },
    {
      id:6,
      img: Figma,
      altDescription:"Image Figma",
      tag: 'Figma',
      titleCard: 'FIGMA PLUGINS',
      paragraph: "Figma plugins are a recent addition to what's becoming the go-to collaborative tool for the designers.",
      published: 'Friday, January, 14th, 2022.',
      // https://pavvydesigns.com/2019/09/15/6-figma-plugins-to-give-you-design-superpowers-and-how-to-use-them/
    },
    {
      id:7,
      img: Github,
      altDescription:"Image GitHub",
      tag: 'GitHub',
      titleCard: '10 COMMON GIT COMMANDS EVERYONE SHOULD KNOW',
      paragraph: 'Github plays an important role in any development project.',
      published: 'Friday, January, 14th, 2022.',
      // https://blog.testproject.io/2021/03/22/git-commands-every-sdet-should-know/
    },
    {
      id:8,
      img: Mongodb,
      altDescription:"Image MongoDB",
      tag: 'MongoDB',
      titleCard: 'MONGODB PERFORMANCE FAQ',
      paragraph: 'If you only have a few minutes to spare, this quick performance FAQ might be useful.',
      published: 'Friday, January, 14th, 2022.',
      // https://www.mongodb.com/basics/best-practices
      // https://www.roihunter.com/blog/5-successful-tips-you-need-to-optimize-mongodb
    },
    {
      id:9,
      img: Mysql,
      altDescription:"Image MySQL",
      tag: 'MySQL',
      titleCard: 'MY FIRST DATABASE',
      paragraph: "MySQL is the world's most popular open-source database. MySQL is simple to set up and easy to use.",
      published: 'Friday, January, 14th, 2022.',
      // https://dev.mysql.com/doc/mysql-getting-started/en/
    },
    {
      id:10,
      img: StyledComponents,
      altDescription:"Image Styled Components",
      tag: 'Styled Components',
      titleCard: 'HOW TO USE STYLED COMPONENTS?',
      paragraph: 'A little introduction on how to use styled components.',
      published: 'Friday, January, 14th, 2022.',
    },
    {
      id:11,
      img: English,
      altDescription:"Image English",
      tag: 'English',
      titleCard: 'SOMETHING ABOUT ENGLISH',
      paragraph: 'In this article, you will find information about topics basic in English.',
      published: 'Friday, January, 14th, 2022.',
    },
  ]
}
export default data;