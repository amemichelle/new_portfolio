import "./topparagraph.scss";
import homeIcon from "../../assets/home.svg";
import workIcon from "../../assets/work.svg";
import aboutIcon from "../../assets/about.svg";
import resumeIcon from "../../assets/resume.svg"

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
          <div className="nav-row__item">
            <img src={homeIcon}/>
          </div>
          <div className="nav-row__item">
            <img src={workIcon}/>
          </div>
          <div className="nav-row__item">
            <img src={aboutIcon}/>
          </div>
          <div className="nav-row__item">
            <img src={resumeIcon}/>
          </div>
        </div>
        <div className="top-paragraph__img"></div>
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
