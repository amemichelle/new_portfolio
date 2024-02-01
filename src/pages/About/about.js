import "./about.scss";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/navbar";
import mePhoto from "../../assets/me.png";
import SummaryBox from "../../components/SummaryBox/summarybox";
import Hackathons from "../../components/Hackathons/hackathons";
import Activity from "../../components/Activity/activity";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/Footer";
import ResumeItem from "../../components/ResumeItem/ResumeItem";
import brainStationLogo from "../../assets/brainstation-logo.svg";
import freelancePlaceholder from "../../assets/freelance-placeholder.svg";
import guustoIcon from "../../assets/guusto-icon.svg";

function about() {
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

        <section className="about__top">
          <div className="about__top-container">
            <img src={mePhoto} className="about__photo" />
            <div className="about__top-content">
              <h1 className="about__header">Hi again, I’m Michelle! </h1>
              <p className="about__desc">
                Beyond Product Design, I’m a maker that enjoys taking things
                from 0 to 1.
              </p>
            </div>
          </div>
        </section>

        <SummaryBox></SummaryBox>

        <section className="professional-stuff">
          <div className="professional-stuff__box">
            <div className="resume-things">
              <h2 className="about__h2">Experience</h2>
              <ResumeItem
                icon={freelancePlaceholder}
                position="Freelance Designer"
                company="Self-Employed"
                date="Dec 2023 - Present"
                desc="Managed multiple web design and development projects for clients to support their marketing teams in increasing customer conversion."
              ></ResumeItem>
              <ResumeItem
                icon={brainStationLogo}
                position="Teaching Assistant - Software Engineering"
                company="BrainStation"
                date="Nov 2023 - Feb 2024"
                desc="Communicated complex development concepts daily to students learning
          the fundamentals of web development through async and face-to-face
          channels, resulting in an increase of student confidence and
          understanding of concepts."
              ></ResumeItem>

              <ResumeItem
                icon={guustoIcon}
                position="Junior Designer"
                company="Guusto"
                date="Jan 2021 - Jul 2023"
                desc="Spearheaded the design and development of the company's marketing website by managing multiple stakeholder requests and updating the website to meet business needs. Subsequently utilized custom Javascript to create a tailored platform that communicates the company’s value and acts as the #1 lead generation tool."
              ></ResumeItem>
            </div>
            <Hackathons></Hackathons>
          </div>
        </section>

        <section className="after-hours">
          <div className="after-hours__container">
            <div className="after-hours__titles">
              <p className="after-hours__header">
                After hours you can find me...
              </p>
            </div>
            <div className="after-hours__grid">
              <Activity
                title="Walking slower then the average person."
                desc="When outside, I’m often walking my senior dog Benji around a soccer field, or not walking fast enough to keep up with friends."
              ></Activity>
              <Activity
                title="Sticking my nose in a book."
                desc="For screen breaks, I’m typically reading something from my book collection for fun, or flipping through a design book for reference."
              ></Activity>

              <Activity
                title="Participating in online communities."
                desc="Whether it be learning from people at Vancouver Design Check-in, or moderating the personal development community for Lavendaire, I’m always trying to frequent spaces that inspire me."
              ></Activity>
              <Activity
                title="Improving my hand-eye coordination."
                desc="You can catch me trying my best at League of Legends, surviving the night in Don’t Starve Together, or putting the finishing touches on my Animal Crossing island."
              ></Activity>
            </div>
          </div>
        </section>

        <CTA></CTA>
      </motion.div>

      <Footer></Footer>
    </>
  );
}

export default about;
