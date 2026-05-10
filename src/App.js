import "./App.scss";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Boxpals from "./pages/Project/boxpals";
import Guusto from "./pages/Project/guusto";
import Cultivate from "./pages/Project/cultivate";
import DeltaControls from "./pages/Project/deltacontrols";
import MarketingProject from "./pages/MarketingProject/marketingproject";
import FixedSidebarLayout from "./components/FixedSidebarLayout/fixedsidebarlayout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themecontext";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          {/* <ScrollToTop /> */}
          <Routes>
            <Route
              path="/"
              element={
                <FixedSidebarLayout>
                  <Home />
                </FixedSidebarLayout>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <FixedSidebarLayout>
                  <About />
                </FixedSidebarLayout>
              }
            ></Route>
            <Route path="/boxpals" element={<Boxpals />}></Route>
            <Route path="/guusto" element={<Guusto />}></Route>
            <Route path="/cultivate" element={<Cultivate />}></Route>
            <Route path="/deltacontrols" element={<DeltaControls />}></Route>
            <Route
              path="/marketing-projects"
              element={
                <FixedSidebarLayout>
                  <MarketingProject />
                </FixedSidebarLayout>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
