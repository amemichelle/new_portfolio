import "./App.scss";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Boxpals from "./pages/Project/boxpals";
import Guusto from "./pages/Project/guusto";
import Cultivate from "./pages/Project/cultivate";
import MarketingProject from "./pages/MarketingProject/marketingproject";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/boxpals" element={<Boxpals />}></Route>
          <Route path="/guusto" element={<Guusto />}></Route>
          <Route path="/cultivate" element={<Cultivate />}></Route>
          <Route
            path="/marketing-projects"
            element={<MarketingProject />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
