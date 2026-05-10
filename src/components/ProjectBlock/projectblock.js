import "./projectblock.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import accentTop from "../../assets/tl.svg";
import accentBottom from "../../assets/br.svg";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";

function ProjectBlock(props) {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = (e) => {
    setHovered(true);
  };

  const mouseLeave = (e) => {
    setHovered(false);
  };

  const style = hovered ? { color: "#4069cc" } : {};
  const tags = props.tags;

  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="project"
      >
        <AnimatePresence initial={false}>
          {hovered ? (
            <motion.div
              className="project__skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="project__location">{props.location}</p>
              <div className="project__tags">
                {tags.map((tag) => (
                  <p className="project__desc">
                    <span className="hashtag"># </span>
                    {tag}
                  </p>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div
          className={"project__img-container"}
          style={{ backgroundColor: props.bgcolor }}
        >
          <motion.img
            initial={false}
            animate={{ width: hovered ? "72%" : "70%" }}
            key="default"
            src={props.hoverimg}
            className={"project__logo"}
          />
        </div>
        <div className="project__info">
          <h2 className="project__title" style={style}>
            {props.title}
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
