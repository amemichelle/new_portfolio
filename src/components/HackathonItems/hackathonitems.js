import "./hackathonitems.scss";
import medal from "../../assets/medal.svg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HackathonItems(props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: { x: mousePosition.x, y: mousePosition.y },
  };

  return (
    <>
      <div className="hackathon-item">
        <motion.div
          className="hackathon-item__img-box"
          variants={variants}
          animate="default"
        >
          <img className="hackathon-item__img" src={props.img} />
        </motion.div>
        <div className="hackathon-item__main">
          <p className="hackathon-item__name">{props.name}</p>
          <img
            src={medal}
            style={{ display: props.award ? "inline-block" : "none" }}
            className="hackathon-item__icon"
          />
        </div>
        <p className="hackathon-item__date">{props.date}</p>
      </div>
    </>
  );
}

export default HackathonItems;
