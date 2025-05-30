import "./topparagraph.scss";
import sparklegroup from "../../assets/sparklegroup.svg";
import singlesparkle from "../../assets/singlesparkle.svg";
import { motion } from "framer-motion";
import MotionLink from "../MotionLink/motionlink";

function TopParagrah() {
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
        duration: "0.3",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="top-paragraph">
        <div className="top-paragraph__container">
          <div className="big__container">
            <h1 className="big__title">Hiya, I’m Michelle! </h1>
            <div className="big__sparkle-container">
              <img src={sparklegroup} className="sparkle-group" />
            </div>
          </div>
          <p className="big__desc">
            I’m a spirited Product Designer creating inviting spaces on the
            internet by blending cross-disciplinary knowledge with a passion for
            customer advocacy.
          </p>

          <div className="list__container">
            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">Living in Vancouver, Canada</p>
            </div>

            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">Currently designing @</p>
              <MotionLink
                link="http://deltacontrols.com/"
                label=" Delta Controls ↗"
              />
            </div>

            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">Tinkering with React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopParagrah;
