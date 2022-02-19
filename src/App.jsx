import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/Aboutme/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import NotFound from "./pages/NotFoundPage.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Websites from "./pages/Portfolio/Websites.jsx";
import Contact from "./pages/ContactMe/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/java" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
