import "./navbar.scss";
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

  const bgVariants = {
    rest: {
      width: "0%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left-container">
            <div className="nav__logo-container">
              <NavLink reloadDocument to="/">
                <motion.svg
                  className="nav__logo-img"
                  width="127"
                  height="50"
                  viewBox="0 0 127 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2.99609 13.7214C4.81746 11.4319 8.67806 4.49289 11.0862 5.09694C13.4943 5.701 6.11039 30.6639 8.91988 30.4625C11.7294 30.2612 15.7967 10.6796 18.6062 11.8877C21.4157 13.0958 19.1387 21.5311 20.5434 21.9338C21.9482 22.3365 29.197 3.28039 32.053 4.25263C37.4089 6.07592 18.8362 34.6712 23.0504 35.4766C27.2647 36.282 33.4326 20.3098 36.0414 19.5044C38.6503 18.6989 39.9718 48.499 32.7474 44.2706C19.4509 36.4883 57.8369 23.6937 49.6044 19.5044C41.3718 15.315 44.8119 33.8903 45.8153 34.293C46.8187 34.6957 50.5271 28.42 51.5305 28.42C52.5339 28.42 52.5466 33.8903 53.9514 34.293C55.3561 34.6957 62.9819 21.4064 61.9785 21.2051C61.1758 21.044 58.8196 37.6393 64.186 33.9191C71.5546 28.811 68.9583 25.2382 68.4002 25.5582C66.9955 26.3636 65.5506 33.4874 70.2063 34.2928C77.0294 35.4731 82.8491 18.9136 75.2233 18.9136C72.3853 18.9136 71.0784 20.323 70.2757 21.9338C68.7831 24.9291 76.9176 29.488 78.9049 29.8328C83.7212 30.6685 102.917 3.00317 96.6959 2.04305C88.0667 0.711276 78.4341 30.6975 82.8491 33.9191C87.264 37.1408 123.358 3.14002 113.954 4.60283C108.526 5.44714 96.5752 10.0444 96.5752 28.7702C96.5752 47.4959 89.361 48.7117 87.9905 46.9638C84.1776 42.101 95.8286 34.263 100.308 31.1002C105.726 27.2745 112.951 18.9888 113.954 18.7875C114.958 18.5861 119.924 41.1067 111.405 35.4766C106.79 32.426 117.472 27.2175 124.496 23.1234"
                    stroke="#4069CC"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.5,
                      repeat: 0,
                    }}
                  />
                </motion.svg>
              </NavLink>
            </div>
          </div>

          <div className="nav__right-container">
            <div className="nav__links">
              <motion.a
                className="nav__link"
                href="/"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.span className="nav__bg" variants={bgVariants} />
                <span className="nav__text">Work</span>
              </motion.a>

              <motion.a
                className="nav__link"
                href="/marketing-projects"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.span className="nav__bg" variants={bgVariants} />
                <span className="nav__text">Graphics</span>
              </motion.a>
              <motion.a
                className="nav__link"
                href="/about"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.span className="nav__bg" variants={bgVariants} />
                <span className="nav__text">About</span>
              </motion.a>
              <motion.a
                className="nav__link"
                href="https://drive.google.com/file/d/1wfEGLT4n4xeaODvOHWjHYeNA15IRBg2y/view?usp=sharing"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.span className="nav__bg" variants={bgVariants} />
                <span className="nav__text">Resume</span>
              </motion.a>
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
