import "./projectblock.scss";
import { useState } from "react";
import { motion } from "framer-motion";

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
          <p className="project__desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
