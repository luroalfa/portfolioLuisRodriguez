import GalleryPortfolioApi from 'Assets/GalleryPortfolio/Apis/Giphy.jpg'
import GalleryPortfolioPortadaPokemon from 'Assets/GalleryPortfolio/Apis/portadaPokemon.jpg'

const data = {
  cardData: [
    {
      id: 1,
      img: GalleryPortfolioApi,
      altImg: "Web Api.",
      project: "Web Api with Giphy.",
      Objective: "The objective is to connect my website with the API of GIPHY, and then I use hooks such as useState and useEffect to maintain my state with categories and images and render my components if some category changes.",
      Challenge: "My challenge in this project was to make the testing to app.",
      Technologies: [
        "HTML",
        "CSS",
        "JS",
        "REACT",
      ],
      link: "https://harmonious-figolla-69a3d9.netlify.app/",
    },
    {
      id: 2,
      img: GalleryPortfolioPortadaPokemon,
      altImg: "Web Api.",
      project: "Web Api with PokéApi.",
      Objective: "In this project, the objective is to connect the website with the API of PokéAPI to extract information about pokemons and show it on a card.",
      Challenge: "My challenge in this project was to create pagination.",
      Technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      link: "https://frolicking-trifle-2d1fe0.netlify.app/",
    },
  ]
}

// Export data
export default data;

