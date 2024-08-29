import "./Footer.scss";
import singlesparkle from "../../assets/singlesparkle.svg";
import { motion } from "framer-motion";

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
              <p className="footer__copyright">© Michelle Swolfs 2023</p>
            </div>

            <div className="footer__right">
              <a
                href="mailto:swolfsmichelle8@gmail.com"
                className="footer__link"
              >
                Email ↗
              </a>
              <img className="footer__sparkle" src={singlesparkle} />
              <a
                href="https://www.linkedin.com/in/michelleswolfs/"
                target="_blank"
                className="footer__link"
              >
                Linkedin ↗
              </a>
              <img className="footer__sparkle" src={singlesparkle} />
              <a
                href="https://github.com/amemichelle"
                target="_blank"
                className="footer__link"
              >
                Github ↗
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Footer;
