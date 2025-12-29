import "./about.scss";
import Hackathons from "../../components/Hackathons/hackathons";
import ResumeItem from "../../components/ResumeItem/ResumeItem";
import Recommendations from "../../components/rec/rec";
import clock from "../../assets/clock.svg";
import headphones from "../../assets/headset.svg";
import circleQuestion from "../../assets/circlequestion.svg";
import configPhoto from "../../assets/configphoto.jpg";
import { motion } from "framer-motion";
function About() {
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
        <div className="about__top">
          <div className="about__top-card">
            <div className="about__top-container">
              <div className="about__card" style={{ zIndex: "1" }}>
                <div className="about__card-left">
                  <div className="card__photo-container">
                    <img className="card__photo" src={configPhoto} />
                  </div>
                </div>
                <div className="about__card-right">
                  <div className="card__header">
                    <p className="card__name">Michelle Swolfs</p>
                    <p className="card__desc">Designer who ships (sometimes)</p>
                  </div>
                  <ul className="card__item-list">
                    <li className="card__item">
                      <img src={clock} />
                      <p className="card__item-text">
                        Pacific standard time (PST)
                      </p>
                    </li>
                    <li className="card__item">
                      <img src={headphones} />
                      <p className="card__item-text">
                        Often wearing headphones
                      </p>
                    </li>
                    <li className="card__item">
                      <img src={circleQuestion} />
                      <p className="card__item-text">
                        May work faster than anticipated
                      </p>
                    </li>
                  </ul>

                  <p className="card__caption">
                    *Making and breaking things (responsibly) since 2020.
                  </p>
                </div>
              </div>
            </div>
            <blockquote className="indent">
              <p className="about__content">
                Hey there! I’m a Product Designer with 4+ years of experience,
                bringing value to both startups and larger companies through
                design and code.
              </p>
            </blockquote>

            <ul className="about__bullet-list">
              <li className="about__bullet-list--item">
                Whether it was building robot kits, polishing a new Tumblr
                theme, or crafting my Animal Crossing island, making has been at
                the heart of what I do as long as I can remember. My hope is
                that my career in design continues to be an extension of that.
              </li>
              <li className="about__bullet-list--item">
                Inspiration comes to me from many places, whether it be a new
                design book, the latest physical kpop release, or figuring out
                how to make a portfolio feel warm without knowing what that
                really means.
              </li>
              <li className="about__bullet-list--item">
                Outside of work I’ve picked up a number of hobbies including
                trying to get better at Hollow Knight, keeping my reading streak
                alive, wandering around a gym, chipping away at a half finished
                crochet project, and learning how to box.
              </li>
            </ul>
          </div>

          <div className="horizontal">
            <div className="resume-things">
              <ResumeItem />
            </div>

            <div className="hackathon-things">
              <Hackathons />
            </div>
          </div>

          <div className="rec-container">
            <Recommendations />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
