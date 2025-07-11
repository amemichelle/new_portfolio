import "./topparagraph.scss";

import { Link } from "react-router-dom";

import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import {ReactComponent as AboutIcon} from "../../assets/about.svg";
import {ReactComponent as ResumeIcon} from "../../assets/resume.svg";
import sparkleSticker from "../../assets/sparklesticker.svg";

function TopParagrah() {

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

  return (
    <>
      <div className="top-paragraph">
        <div className="nav-row">
          <Link to="/">
          <div className="nav-row__item">
            <WorkIcon className="nav-row__icon" />
          </div>
          </Link>
          <Link to="/about">
          <div className="nav-row__item">
            <AboutIcon className="nav-row__icon" />
          </div>
          </Link>
          <div className="nav-row__item">
            <ResumeIcon className="nav-row__icon" />
          </div>
        </div>
        <div className="top-paragraph__img">
          <img src={sparkleSticker} />
          </div>
        <div className="top-paragraph__container">
          <div className="big__container">
            <h1 className="big__title">Hiya, I’m Michelle! </h1>
          </div>
          <p className="big__desc">
            I’m a spirited Product Designer creating inviting spaces on the
            internet by blending cross-disciplinary knowledge with a passion for
            customer advocacy.
          </p>


        </div>
      </div>
    </>
  );
}

export default TopParagrah;
