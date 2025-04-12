import "./summarybox.scss";
import SummaryItem from "../SummaryItem/summaryitem";
import bookIcon from "../../assets/bookicon.svg";
import pinIcon from "../../assets/pinicon.svg";
import pencilIcon from "../../assets/pencilicon.svg";

function SummaryBox() {
  return (
    <>
      <div className="summary-box">
        <div className="summary-box__container">
          {/* <p className="summary-box__title">tl;dr</p> */}
          <div className="summary-box__items">
            <SummaryItem
              icon={bookIcon}
              title="Previously"
              desc="Executing on all things design and implementation over at Guusto."
            />
            <SummaryItem
              icon={pinIcon}
              title="Currently"
              desc="Working on..R"
            />
            <SummaryItem
              icon={pencilIcon}
              title="What's Next?"
              desc="Staying fascinated by what design + development can do, and learning as much as I can in the process."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryBox;
