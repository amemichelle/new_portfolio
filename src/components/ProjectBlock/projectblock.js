import "./projectblock.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectBlock(props) {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = (e) => {
    setHovered(true);
  };

  const mouseLeave = (e) => {
    setHovered(false);
  };

  const style = hovered ? { color: "#4069cc" } : {};

  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="project"
      >
        <div
          className={"project__img-container"}
          style={{ backgroundColor: props.bgcolor }}
        >
          <AnimatePresence mode="popLayout">
            {hovered ? (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="hover"
                src={props.img}
                className={"project__logo"}
              />
            ) : (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="default"
                src={props.hoverimg}
                className={"project__logo"}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="project__info">
          <h2 className="project__title" style={style}>
            {props.title}
          </h2>
          <p className="project__desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
