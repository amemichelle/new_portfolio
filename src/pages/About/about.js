import "./about.scss";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/navbar";
import Hackathons from "../../components/Hackathons/hackathons";
import Activity from "../../components/Activity/activity";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/Footer";
import ResumeItem from "../../components/ResumeItem/ResumeItem";

import clock from "../../assets/clock.svg";
import headphones from "../../assets/headset.svg";
import circleQuestion from "../../assets/circlequestion.svg";
import configPhoto from "../../assets/configphoto.jpg";
import sparkleSticker from "../../assets/sparklesticker.svg";
import movieSticker from "../../assets/moviesticker.svg";
import musicSticker from "../../assets/musicsticker.svg";
import heartSticker from "../../assets/heartsticker.svg";

function About() {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  const stickerOptions = [
    sparkleSticker,
    movieSticker,
    musicSticker,
    heartSticker,
  ];

  useEffect(() => {
    const genRandomPos = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerW = containerRect.width;
      const containerH = containerRect.height;

      if (containerRef.current) {
        const positions = stickerOptions.map(() => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const adjustedX = randomX > 100 - 10 ? 100 - 10 : randomX;
          const adjustedY = randomY > 100 - 10 ? 100 - 10 : randomY;
          return { x: adjustedX, y: adjustedY };
        });

        setPositions(positions);
      }
    };
    genRandomPos();
  }, []);

  return (
    <>
      <motion.div
        className="page__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <Navbar></Navbar>

        <section className="about__top">
          <div
            className="about__top-container"
            ref={containerRef}
            style={{ position: "relative" }}
          >
            {positions.map((pos, index) => (
              <motion.img
                key={index}
                src={stickerOptions[index % stickerOptions.length]}
                alt={`svg-${index}`}
                style={{
                  zIndex: "2",
                  position: "absolute",
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                }}
                drag
                dragElastic={0.2}
                dragMomentum={false}
                dragConstraints={containerRef}
              />
            ))}

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
                    <p className="card__item-text">Often wearing headphones</p>
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
        </section>

        <section className="about__top">
          <div className="professional-stuff">
            <div className="professional-stuff__left">
              <div className="story-things">
                <p className="summary__heading">SUMMARY</p>
              </div>
            </div>
            <div className="professional-stuff__right">
              <div className="professional-stuff__box">
                <div className="resume-things">
                  <ResumeItem />
                </div>
                <div className="hackathon-things">
                  <Hackathons />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default About;
