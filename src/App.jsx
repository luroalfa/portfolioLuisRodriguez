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
import Apis from "./pages/Portfolio/Apis.jsx";
import Vectorizations from "./pages/Portfolio/Vectorizations";
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
          <Route path="/blog/HtmlInterviewsQ" element={<HtmlInterviewsQ />} />
          <Route path="/blog/CssInterviewsQ" element={<CssInterviewsQ />} />
          <Route
            path="/blog/JavaScriptInterviewsQ"
            element={<JavaScriptInterviewsQ />}
          />
          <Route path="/blog" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/websites" element={<Websites />} />
          <Route path="/portfolio/apis" element={<Apis />} />
          <Route
            path="/portfolio/vectorizations"
            element={<Vectorizations />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
