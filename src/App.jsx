import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/Aboutme/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import JavaScriptInterviewsQ from "./pages/Blog/JavaScriptInterviewsQ.jsx";
import CssInterviewsQ from "./pages/Blog/CssInterviewsQ.jsx";
import HtmlInterviewsQ from "./pages/Blog/HtmlInterviewsQ.jsx";
import NotFound from "./pages/NotFoundPage.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Websites from "./pages/Portfolio/Websites.jsx";
import Contact from "./pages/ContactMe/Contact.jsx";
import Pdf from "./pages/Pdf/Pdf.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/HtmlInterviewsQ" element={<HtmlInterviewsQ />} />
          <Route path="/CssInterviewsQ" element={<CssInterviewsQ />} />
          <Route
            path="/JavaScriptInterviewsQ"
            element={<JavaScriptInterviewsQ />}
          />
          <Route path="/blog" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path="/pdf" element={<Pdf />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
