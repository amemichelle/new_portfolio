import "./home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/navbar";
import TopParagrah from "../../components/TopParagraph/TopParagraph";
import ProjectBlock from "../../components/ProjectBlock/projectblock";
import Footer from "../../components/Footer/Footer";
import guustologo from "../../assets/guusto.svg";
import boxpalslogo from "../../assets/boxpals.svg";
import cultivateLogo from "../../assets/cultivate_logo.svg";
import boxpalsGroup from "../../assets/boxpals_group.png";
import guustoGroup from "../../assets/guusto_group.png";
import cultivateGroup from "../../assets/cultivate_group.png";

function Home() {
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
        <Navbar></Navbar>

        <TopParagrah></TopParagrah>
        <section className="projects-box">
          <div className="projects-box__container">
            <Link className="projects-box__link" to="/boxpals">
              <ProjectBlock
                img={boxpalslogo}
                hoverimg={boxpalsGroup}
                title="Helping individuals save money through group order management"
                desc="Product design, web development — Capstone project @ BrainStation"
                bgcolor="#004921"
              ></ProjectBlock>
            </Link>

            <Link className="projects-box__link" to="/guusto">
              <ProjectBlock
                img={guustologo}
                hoverimg={guustoGroup}
                title="Reimagining what employee recognition looks like in today's workforce"
                desc="Product design, branding & identity, web development — Employment @ Guusto"
                bgcolor="#22315c"
              ></ProjectBlock>
            </Link>

            <Link className="projects-box__link" to="/cultivate">
              <ProjectBlock
                img={cultivateLogo}
                hoverimg={cultivateGroup}
                title="Connecting employers, employment agencies, and individuals with barriers to employment through micro-jobs"
                desc="Service design, product design, branding & identity - Final Project @ Civic Innovation Change Lab"
                bgcolor="#e3d7cc"
              ></ProjectBlock>
            </Link>
          </div>
        </section>
      </motion.div>
      <Footer></Footer>
    </>
  );
}

export default Home;
