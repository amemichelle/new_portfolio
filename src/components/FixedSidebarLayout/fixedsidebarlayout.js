import "./fixedsidebarlayout.scss";
import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { LayoutContext } from "../../context/leftpanelcontext";
import Navbar from "../Navbar/navbar";
import LeftFixedPanel from "../LeftFixedPanel/leftfixedpanel";

function FixedSidebarLayout({ children }) {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);

  useLayoutEffect(() => {
    function updateLayout() {
      if (containerRef.current && leftRef.current) {
        const containerLeft = containerRef.current.getBoundingClientRect().left;
        setLeftOffset(containerLeft);
        setLeftWidth(leftRef.current.offsetWidth);
      }
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <>
      <Navbar />
      <LayoutContext.Provider
        value={{ containerRef, leftRef, leftWidth, leftOffset }}
      >
        <motion.div
          className="page__container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className="two-col">
            <div ref={containerRef} style={{ display: "flex" }}>
              <LeftFixedPanel ref={leftRef} />
            </div>
            <div
              className="right-stuff"
              style={{ marginLeft: leftWidth + leftOffset }}
            >
              {children}
            </div>
          </div>
        </motion.div>
      </LayoutContext.Provider>
    </>
  );
}

export default FixedSidebarLayout;
