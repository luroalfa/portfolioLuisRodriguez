import improex from 'Assets/GalleryPortfolio/improex.png'
import lactgourmet from 'Assets/GalleryPortfolio/lactgourmet.png'
import yoVector from 'Assets/GalleryPortfolio/Yo-vector.jpg'
import RFL from 'Assets/GalleryPortfolio/rodriguezfallasluis.png'
// import EagleVector from 'Assets/GalleryPortfolio/EagleVector.jpg'
// import galloVector from 'Assets/GalleryPortfolio/GalloVector.jpg'
// import NeuraKids from 'Assets/GalleryPortfolio/NeuraKids.png'
// import Metakrivia from 'Assets/GalleryPortfolio/metakrivia.png'
// import SMI from 'Assets/GalleryPortfolio/SMI.png'
// import Blondies from 'Assets/GalleryPortfolio/blondies.png'
// import MS from 'Assets/GalleryPortfolio/MusicStore.png'
// import Grunge from 'Assets/GalleryPortfolio/Grunge.png'


const data = {
  cardData: [
    {
      id: 1,
      img: RFL,
      altDescription: "Image html",
      tags: [
        "HTML",
        "CSS",
        "JS",
        "REACT",
        "Styled-Components"
      ],
      titleCard: 'websites',
      paragraph: 'As a developer, I need an online presence. This is my website, is a personal portfolio, where I show my skills and knowledge as a web developer.',
      published: 'Friday, January, 14th, 2022.',
    },
    {
      id: 2,
      img: lactgourmet,
      altDescription: "Image html",
      tags: [
        'Illustrator',
        "Photoshop",
      ],
      titleCard: 'Design',
      paragraph: 'LactGourmet is an investigation about a dairy business. Here you find arts for social networks as facebook, youtube, Instagram and the logo, also you find the design website.',
      published: 'Sunday, February, 06th, 2022.',
    },
    // {
    //   id: 3,
    //   img: NeuraKids,
    //   altDescription: "Image html",
    //   tags: [
    //     "HTML",
    //     "CSS",
    //     "JS",
    //     "REACT",
    //     "Styled-Components"],
    //   titleCard: 'WEBSITE',
    //   paragraph: 'NeuraKids was an initiative with my brother, with the purpose of to teach childrens about programming in Scratch and Mblock.',
    //   published: 'Sunday, February, 06th, 2022.',
    //   address: 'https://neurakids.netlify.app/',
    // },
    {
      id: 4,
      img: yoVector,
      altDescription: "Image html",
      tags: ['Illustrator'],
      titleCard: 'VECTORIZATION',
      paragraph: 'Here you can find, some skills that I made with illustrator, such as vector images, logotype design, web design, I hope you like it.',
      published: 'Friday, January, 14th, 2022.',
      //EagleVector - galloVector -SMI
    },
    {
      id: 7,
      img: improex,
      altDescription: "Image html",
      tags: [
        'Html',
        "Css",
      ],
      titleCard: 'layout design',
      paragraph: 'In this article, you can find some projects about layout design, strictly custom-made as the design indicates.',
      published: 'Friday, January, 14th, 2022.',
      //MS -Blondies - Grunge
    },
    // {
    //   id: 7,
    //   img: improex,
    //   altDescription: "Image html",
    //   tags: [
    //     'Html',
    //     "Css",
    //     "JavaScript",
    //   ],
    //   titleCard: 'Responsive Web Design',
    //   paragraph: 'This article covers the most frequently asked HTML and HTML5 questions asked in interviews.',
    //   published: 'Friday, January, 14th, 2022.',
    // },
  ]
}

// Export data
export default data;



// paragraph: 'As a freelance person I have work made in Illustrator, where I work with vector images. These are some of my projects, I hope you like it',