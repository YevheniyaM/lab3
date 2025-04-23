import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Publications from "./pages/Publications";
import Publication from "./pages/Publication";

function App() {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
