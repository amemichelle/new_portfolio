import "./hackathons.scss";
import { useState } from "react";
import singleSparkle from "../../assets/singlesparkle.svg";
import cfcImg from "../../assets/cfc-img.jpg";
import stllspaceImg from "../../assets/stillspace-img.jpg";
import rebuildImg from "../../assets/rebuild-img.jpg";
import snapfoodImg from "../../assets/snapfood-img.jpg";
import amplifyImg from "../../assets/amplify-img.jpg";
import genNowImg from "../../assets/gennow-img.jpg";
import reviveImg from "../../assets/revive-img.jpg";
import vaccineInfoImg from "../../assets/vaccineinfo-img.jpg";
import textSafeImg from "../../assets/textsafe-img.jpg";
import vizitImg from "../../assets/vizit-img.jpg";
import { ReactComponent as ArrowLeft } from "../../assets/slideshowArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/slideshowArrowRight.svg";

function Hackathons() {
  const [projCount, setProjCount] = useState(0);

  const projectArray = [
    {
      img: vizitImg,
      project: "Vizit",
      event: "Sparks Designathon",
      year: "2023",
    },
    {
      img: textSafeImg,
      project: "Text Safe",
      event: "Elle Hacks",
      year: "2022",
    },
    {
      img: vaccineInfoImg,
      project: "Vaccine Info",
      event: "TOHacks",
      year: "2021",
    },
    // {
    //   img: vaccineInfoImg,
    //   project: "what did we make?? ",
    //   event: "Adobe x Target Creative Jam",
    //   year: "2021",
    // },
    {
      img: reviveImg,
      project: "99Dresses",
      event: "Revive",
      year: "2021",
    },
    {
      img: reviveImg,
      project: "Polar Plunge",
      event: "BC Game Jam",
      year: "2020",
    },
    {
      img: genNowImg,
      project: "Gen Now",
      event: "Just Design",
      year: "2020",
    },
    {
      img: amplifyImg,
      project: "Amplify",
      event: "cmd+f",
      year: "2020",
    },
    // {
    //   img: genNowImg,
    //   project: "also don't remember??",
    //   event: "Adobe x Netflix Creative Jam",
    //   year: "2020",
    // },
    {
      img: snapfoodImg,
      project: "Snapfood",
      event: "SystemHacks",
      year: "2020",
    },
    {
      img: rebuildImg,
      project: "Rebuild",
      event: "NWHacks",
      year: "2020",
    },
    {
      img: stllspaceImg,
      project: "StillSpace",
      event: "PenApps XX",
      year: "2019",
    },
    {
      img: cfcImg,
      project: "Carbon Footprint Calculator",
      event: "Hacking for Humanity",
      year: "2019",
    },
  ];

  const increaseCount = () => {
    setProjCount((projCount) => {
      if (projCount > projectArray.length - 2) {
        return 0;
      } else {
        return projCount + 1;
      }
    });
  };

  const decreaseCount = () => {
    setProjCount((projCount) => {
      if (projCount === 0) {
        return projectArray.length - 1;
      } else {
        return projCount - 1;
      }
    });
  };

  return (
    <>
      <div className="hackathon">
        <img className="hackathon__img" src={projectArray[projCount].img} />

        <div className="hackathon__container">
          <div className="hackathon__container-left">
            <p className="hackathon__project">
              {projectArray[projCount].project}
            </p>
            <div className="hackathon__container-info">
              <p className="hackathon__event">
                {projectArray[projCount].event}
              </p>
              <img className="hackathon__divider" src={singleSparkle} />
              <p className="hackathon__year">{projectArray[projCount].year}</p>
            </div>
          </div>
          <div className="hackathon__container-right">
            <ArrowLeft className="arrow__left" onClick={decreaseCount} />
            <ArrowRight className="arrow__right" onClick={increaseCount} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hackathons;
