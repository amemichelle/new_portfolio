import "./topparagraph.scss";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import { ReactComponent as AboutIcon } from "../../assets/about.svg";
import { ReactComponent as ResumeIcon } from "../../assets/resume.svg";
import sparkleSticker from "../../assets/sparklesticker.svg";
import boxpalsSticker from "../../assets/boxpalssticker.svg";
import guustoSticker from "../../assets/guustosticker.svg";
import cultivateSticker from "../../assets/cultivatesticker.svg";
function TopParagrah() {
  const location = useLocation();

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
        duration: "0.3",
        ease: "easeInOut",
      },
    },
  };

  const getSidebarContent = () => {
    switch (location.pathname) {
      case "/":
        return {
          img: sparkleSticker,
          title: "Hiya, I’m Michelle!",
          desc: "I’m a spirited Product Designer creating inviting spaces on the internet by blending cross-disciplinary knowledge with a passion for customer advocacy.",
          bgClass: "bg-main",
        };

      case "/about":
        return {
          img: sparkleSticker,
          title: "Hiya, I’m Michelle!",
          desc: "I’m a spirited Product Designer creating inviting spaces on the internet by blending cross-disciplinary knowledge with a passion for customer advocacy.",
          bgClass: "bg-main",
        };

      case "/boxpals":
        return {
          img: boxpalsSticker,
          desc: "Boxpals is a group order management solution that allows people in the same locale to benefit from the economic and environmental benefits of ordering from retailers together (as opposed to individually)",
          bgClass: "bg-boxpals",
        };

      case "/guusto":
        return {
          img: guustoSticker,
          desc: "Guusto is a B2B company that provides employee recognition and customer rewards solutions through both monetary and non-monetary recognition.",
          bgClass: "bg-guusto",
        };

      case "/cultivate":
        return {
          img: cultivateSticker,
          desc: "Cultivate Inclusivity is a web platform that helps to faciliate the connection between employers, employment agencies, and those with barriers to employment.",
          bgClass: "bg-cultivate",
        };
    }
  };

  const { img, title, desc, bgClass } = getSidebarContent();

  return (
    <>
      <div className="top-paragraph">
        <div className="nav-row">
          <Link className="nav-row__link" to="/">
            <div className="nav-row__item">
              <WorkIcon className="nav-row__icon" />
              <p className="nav-row__text">Work</p>
            </div>
          </Link>
          <Link className="nav-row__link" to="/about">
            <div className="nav-row__item">
              <AboutIcon className="nav-row__icon" />
              <p className="nav-row__text">About</p>
            </div>
          </Link>
          <Link className="nav-row__link" to="/">
            <div className="nav-row__item">
              <ResumeIcon className="nav-row__icon" />
              <p className="nav-row__text">Resume</p>
            </div>
          </Link>
        </div>
        <div className={`top-paragraph__img ${bgClass}`}>
          <img className="img-file" src={img} />
        </div>
        <div className="top-paragraph__container">
          <div className="big__container">
            <h1 className="big__title">{title}</h1>
          </div>
          <p className="big__desc">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default TopParagrah;
