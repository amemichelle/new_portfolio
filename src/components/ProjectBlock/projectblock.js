import "./projectblock.scss";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <div className="project__top-bit">
          <div className="project__icon">
            <WorkIcon className="project__ic" />
          </div>
          <p className="project__location">{props.location}</p>
        </div>
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
          <div className="project__skills">
            {/* <p className="project__desc">{props.desc}</p> */}
            {tags.map((tag) => (
              <p className="project__desc">
                <span className="hashtag"># </span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
