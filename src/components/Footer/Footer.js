import "./Footer.scss";
import singlesparkle from "../../assets/singlesparkle.svg";
import { motion } from "framer-motion";
import MotionLink from "../MotionLink/motionlink";

function Footer() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <footer className="footer">
          <div className="footer__container">
            <div className="footer__left">
              <p className="footer__copyright">© Michelle Swolfs 2025</p>
            </div>

            <div className="footer__right">
              <MotionLink
                link="mailto:swolfsmichelle8@gmail.com"
                label="Email ↗"
              />

              <img className="footer__sparkle" src={singlesparkle} />
              <MotionLink
                link="https://www.linkedin.com/in/michelleswolfs/"
                label=" Linkedin ↗"
              />

              <img className="footer__sparkle" src={singlesparkle} />
              <MotionLink
                link="https://github.com/amemichelle"
                label="Github ↗"
              />
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Footer;
