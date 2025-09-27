import "./home.scss";
import { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectBlock from "../../components/ProjectBlock/projectblock";
import guustologo from "../../assets/guusto.svg";
import boxpalslogo from "../../assets/boxpals.svg";
import cultivateLogo from "../../assets/cultivate_logo.svg";
import boxpalsGroup from "../../assets/boxpals_group.png";
import guustoGroup from "../../assets/guusto_group.png";
import cultivateGroup from "../../assets/cultivate_group.png";
import { motion } from "framer-motion";

function Home() {
  const leftRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (leftRef.current) {
        setLeftWidth(leftRef.current.offsetWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
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
        <div
          className="projects-container"
          style={{ marginLeft: `${leftWidth}px` }}
        >
          <section className="projects-box">
            <div className="projects-box__container">
              <Link className="projects-box__link" to="/boxpals">
                <ProjectBlock
                  img={boxpalslogo}
                  hoverimg={boxpalsGroup}
                  title="Helping individuals save money through group order management"
                  location="Capstone project @ BrainStation"
                  desc="Product design, web development"
                  bgcolor="#004921"
                ></ProjectBlock>
              </Link>

              <Link className="projects-box__link" to="/guusto">
                <ProjectBlock
                  img={guustologo}
                  hoverimg={guustoGroup}
                  title="Reimagining what employee recognition looks like in today's workforce"
                  location="Employment @ Guusto"
                  desc="Product design, branding & identity, web development"
                  bgcolor="#22315c"
                ></ProjectBlock>
              </Link>

              <Link className="projects-box__link" to="/cultivate">
                <ProjectBlock
                  img={cultivateLogo}
                  hoverimg={cultivateGroup}
                  title="Connecting employers, employment agencies, and individuals with barriers to employment through micro-jobs"
                  location="Final Project @ Civic Innovation Change Lab"
                  desc="Service design, product design, branding & identity"
                  bgcolor="#e3d7cc"
                ></ProjectBlock>
              </Link>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
