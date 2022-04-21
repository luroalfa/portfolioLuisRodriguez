import NeuraKids from 'Assets/GalleryPortfolio/websites/NeuraKids.png'
import RFL from 'Assets/GalleryPortfolio/rodriguezfallasluis.webp'
import blondies from 'Assets/GalleryPortfolio/websites/Blondies.webp'
import improex from 'Assets/GalleryPortfolio/websites/improex.webp'

const data = {
  cardData: [
    {
      id: 1,
      img: RFL,
      altImg: "Personal Website.",
      project: "Personal Website.",
      Objective: "As a web developer,  I need an online presence, and also I often need to show my projects with the technologies I work with, this is my personal website where I can show everything I'm capable of doing.",
      Challenge: "My challenge in this project was to make the connection between my form and AWS SES.And also implement CSP on my website.",
      Technologies: [
        "HTML",
        "CSS",
        "JS",
        "REACT",
        "Styled-Components",
        "WOW.JS",
        "MUI"
      ],
      link: "https://rodriguezfallasluis.com/",
    },
    {

      id: 2,
      img: NeuraKids,
      altImg: "Imagen de Neurakids",
      project: "Neurakids.",
      Objective: "NeuraKids was an initiative with my brother, with the purpose of to teach childrens about programming in Scratch and Mblock.",
      Challenge: "The challenge we had was in the organization of the children, to classify them according to age.",
      Technologies: [
        "HTML",
        "CSS",
        "JS",
        "REACT",
        "Styled-Components"
      ],
      link: "https://neurakids.netlify.app/",
    },
    {
      id: 3,
      img: blondies,
      altImg: "Blondies Bakery.",
      project: "Blondies Bakery.",
      Objective: "Blondies Bakery is a website where you can find information about cakes, muffins, cheesecakes, mousse and others.",
      Challenge: "My challenge in this project was to learn sass preprocessor.",
      Technologies: [
        "HTML",
        "CSS",
        "Sass",
        "JS",
        "bootstrap"
      ],
      link: "https://bootstrapblondies.netlify.app/",
    },
    {
      id: 4,
      img: improex,
      altImg: "Improex",
      project: "Improex.",
      Objective: "Improex was a layout project, they gave me the digital design in pdf and I had to create the website.",
      Challenge: "My challenge in this project was to implement typescript.",
      Technologies: [
        "HTML",
        "CSS",
      ],
      link: "https://magnificent-figolla-8800db.netlify.app/",
    },
  ]
}

// Export data
export default data;

