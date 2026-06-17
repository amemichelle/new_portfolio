import "./projectblock.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import accentTop from "../../assets/tl.svg";
import accentBottom from "../../assets/br.svg";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";

function ProjectBlock(props) {
  const [hovered, setHovered] = useState(false);

  let timeout;
  const mouseEnter = (e) => {
    clearTimeout(timeout);
    setHovered(true);
  };

  const mouseLeave = (e) => {
    timeout = setTimeout(() => {
      setHovered(false);
    }, 30);
  };

  const style = hovered ? { color: "#4069cc" } : {};
  const tags = props.tags;

  return (
    <>
      <motion.div
        layout
        className="project"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 30,
          mass: 1,
        }}
      >
        <motion.div
          className="project__skills"
          key="skills"
          initial={{ opacity: 0, height: hovered ? "auto" : 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            y: 0,
            height: hovered ? "auto" : 0,
          }}
          exit={{ opacity: 0, height: hovered ? "auto" : 0 }}
        >
          <p className="project__location">{props.location}</p>

          <div className="project__tags">
            {props.tags.map((tag) => (
              <p key={tag} className="project__desc">
                <span className="hashtag"># </span>
                {tag}
              </p>
            ))}
          </div>
        </motion.div>
        {/* Image */}
        <div
          className="project__img-container"
          style={{ backgroundColor: props.bgcolor }}
        >
          <motion.img
            src={props.hoverimg}
            className="project__logo"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 32,
            }}
          />
        </div>

        {/* Title */}
        <div className="project__info">
          <h2 className="project__title">{props.title}</h2>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectBlock;
