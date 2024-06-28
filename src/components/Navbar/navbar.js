import "./navbar.scss";
import logomark from "../../assets/logomark.svg";
import mobilemenu from "../../assets/mobile-menu.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (viewport.width > 768) {
      setVisible(false);
    }
  }, [viewport.width]);

  const handleClick = (event) => {
    setVisible((current) => !current);
  };

  const [hovered, setHovered] = useState(false);

  const mouseEnter = (e) => {
    setHovered(true);
  };

  const mouseLeave = (e) => {
    setHovered(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left-container">
            <div className="nav__logo-container">
              <NavLink reloadDocument to="/">
                <img className="nav__logo-img" src={logomark} />
              </NavLink>
            </div>
          </div>

          <div className="nav__right-container">
            <div className="nav__links">
              <NavLink reloadDocument to="/" className="nav__links-item">
                Work
              </NavLink>
              <NavLink
                reloadDocument
                to="/marketing-projects"
                className="nav__links-item"
              >
                Graphics
              </NavLink>
              <NavLink reloadDocument to="/about" className="nav__links-item">
                About
              </NavLink>
              <NavLink
                to="https://drive.google.com/file/d/1wfEGLT4n4xeaODvOHWjHYeNA15IRBg2y/view?usp=sharing"
                target="_blank"
                className="nav__links-item"
              >
                Resume
              </NavLink>
            </div>
            <div className="nav__mobile-menu" onClick={handleClick}>
              <img src={mobilemenu} className="mobile-menu" />
            </div>
          </div>
        </div>
      </nav>

      {visible && (
        <div className="mobile-nav">
          <div className="mobile-nav__box">
            <NavLink reloadDocument className="mobile-nav__link" to="/">
              Work
            </NavLink>
            <NavLink
              reloadDocument
              className="mobile-nav__link"
              to="/marketing-projects"
            >
              Graphics
            </NavLink>
            <NavLink reloadDocument className="mobile-nav__link" to="/about">
              About
            </NavLink>
            <NavLink
              className="mobile-nav__link"
              to="https://drive.google.com/file/d/1wfEGLT4n4xeaODvOHWjHYeNA15IRBg2y/view?usp=sharing"
              target="_blank"
            >
              Resume
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
