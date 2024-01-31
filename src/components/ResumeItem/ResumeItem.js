import "./ResumeItem.scss";
import singleSparkle from "../../assets/singlesparkle.svg";

function ResumeItem(props) {
  return (
    <>
      <div className="resume__item-box">
        <div className="resume__heading-items">
          <img className="resume__icon" src={props.icon} />
          <div className="resume__top-text">
            <p className="resume__position">{props.position}</p>
            <div className="resume__company-date">
              <p className="resume__company">{props.company}</p>
              <img className="resume__divider" src={singleSparkle} />
              <p className="resume__date">{props.date}</p>
            </div>
          </div>
        </div>
        <p className="resume__desc">{props.desc}</p>
      </div>
    </>
  );
}

export default ResumeItem;
