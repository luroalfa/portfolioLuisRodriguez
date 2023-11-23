import images from '../Assets/GalleryBlog/index';

function createCardData(id, imageKey, titleCard, paragraph, published, link) {
  return {
    id,
    img: images[imageKey],
    titleCard: titleCard,
    paragraph,
    published,
    link
  };
}

const cardData = [
  createCardData(1, 'api', 'RESTful Rules', "Discover the core elements of crafting intuitive and robust RESTful APIs, crucial for fluid interaction between clients and servers, and architecting scalable API frameworks. Delve into the strategies that ensure reliable and straightforward end-to-end data flow. I hope you like it!", 'Thursday, November, 23th, 2023.', '/blog/ResfulRules'),
  createCardData(2, 'gitHub', 'Mastering GitHub', "Unveil the secrets of GitHub, the game-changer in collaborative coding projects. Delve into best practices for managing repositories, contributing to open-source projects, and optimizing your workflow with Git. Find tools, tips, and tricks for both beginners and seasoned developers right here!", 'Thursday, November, 23th, 2023.', '/blog/GitHubPage'),
  createCardData(3, 'linuxCommands', 'Basic Linux Commands', "Embark on the journey through Linux, the powerhouse of operating systems. Master the essential command lines that are the building blocks for advanced computing. Grasp the fundamentals that will empower you to navigate, manipulate, and control the Linux environment with confidence.", 'Thursday, September, 15th, 2022.', '/blog/BasicCommands'),
  createCardData(4, 'html', 'Interview questions', 'Uncover the most common HTML questions poised in interviews, providing a walkthrough of the essentials that every aspiring web developer should know. This article is your guide to acing those interview questions with confidence.Enjoy the read!', 'Thursday, March, 17th, 2022.', '/blog/HtmlInterviewsQ'),
  createCardData(5, 'css', 'Interview questions', "Step into the colorful world of CSS with this engaging article, tailor-made for anyone preparing for web design interviews. I've gathered the most common CSS questions interviewers love to ask, breaking them down into easy-to-understand concepts. This friendly guide is your companion to feeling more confident and ready to shine in your next interview, turning those tricky CSS questions into opportunities to showcase your creative flair!", 'Monday, March, 16th, 2022.', '/blog/CssInterviewsQ'),
  createCardData(6, 'javascript', 'Interview questions', `Join on a journey through the world of JavaScript with this article, specially crafted for those gearing up for interviews. I've carefully selected and explained the most common JavaScript questions you're likely to encounter. Whether you're new to JavaScript or just looking to refresh your knowledge, this article offers a treasure trove of insights and practical tips to help you navigate through interview questions with ease and confidence.Hope this catches your interest!`, 'Friday, January, 14th, 2022.', '/blog/JavaScriptInterviewsQ'),
];

const data = { cardData };

export default data;
