import "./navbar.scss";
import { AnimatePresence, motion } from "framer-motion";
import mobilemenu from "../../assets/mobile-menu.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

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
    if (viewport.width > 1280) {
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

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <>
      <nav className="nav">
        <motion.div
          className="nav__container"
          initial={{ y: "-100%" }}
          animate={{ y: "0%", transition: { duration: 0.3 } }}
        >
          <div className="nav__right-container">
            <div className="nav__mobile-menu" onClick={handleClick}>
              <img src={mobilemenu} className="mobile-menu" />
            </div>
          </div>
        </motion.div>
      </nav>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="mobile-nav"
            initial={{ y: "-100%" }}
            animate={{ y: "40%", transition: { duration: 0.5 } }}
            exit={{ y: "-100%" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
