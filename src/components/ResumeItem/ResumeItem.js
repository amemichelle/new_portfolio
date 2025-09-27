import "./ResumeItem.scss";
import { Link } from "react-router-dom";
import brainStationLogo from "../../assets/brainstation-logo.svg";
import guustoIcon from "../../assets/guusto-icon.svg";
import deltaTriangle from "../../assets/delta-triangle.svg";
import singleSparkle from "../../assets/singlesparkle.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowrightoutline.svg";

function ResumeItem() {
  return (
    <>
      <div className="resume__item-box">
        <div className="resume__item">
          <div className="resume__heading-items">
            <img className="resume__icon" src={deltaTriangle} />
            <div className="resume__top-text">
              <p className="resume__position">Intermediate UI/UX Designer</p>
              <div className="resume__company-date">
                <p className="resume__company">Delta Controls</p>
                <img src={singleSparkle} className="resume__divider" />
                <p className="resume__date">2024 - Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume__item">
          <div className="resume__heading-items">
            <img className="resume__icon" src={brainStationLogo} />
            <div className="resume__top-text">
              <p className="resume__position">Teaching Assistant - SW Eng.</p>
              <div className="resume__company-date">
                <p className="resume__company">BrainStation</p>
                <img src={singleSparkle} className="resume__divider" />
                <p className="resume__date">2023 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume__item">
          <div className="resume__heading-items">
            <img className="resume__icon" src={guustoIcon} />
            <div className="resume__top-text">
              <p className="resume__position">Junior Designer </p>
              <div className="resume__company-date">
                <p className="resume__company">Guusto</p>
                <img src={singleSparkle} className="resume__divider" />
                <p className="resume__date">2021 - 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume__link">
          <p className="resume__actions-text">View my</p>
          <Link className="resume__actions-button">resume</Link>
        </div>
      </div>
    </>
  );
}

export default ResumeItem;
