import "./booksbox.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BooksBox(props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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
      <div className="books__container">
        <img src={props.img} className="books__img" />
      </div>
    </>
  );
}

export default BooksBox;
