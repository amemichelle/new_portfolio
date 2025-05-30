import "./motionlink.scss";
import { motion } from "framer-motion";

function MotionLink(props) {
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

  return (
    <>
      <motion.a
        className="link"
        href={props.link}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span className="link__bg" variants={bgVariants} />
        <span className="link__text">{props.label}</span>
      </motion.a>
    </>
  );
}

export default MotionLink;
