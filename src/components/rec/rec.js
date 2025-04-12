import "./rec.scss";

import { useState } from "react";

import { ReactComponent as ArrowLeft } from "../../assets/slideshowArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/slideshowArrowRight.svg";
function Recommendations() {
  const recs = require("../../data/recommendations.json");
  const [recCount, setRecCount] = useState(0);

  const increaseCount = () => {
    setRecCount((recCount) => {
      if (recCount > recs.length - 2) {
        return 0;
      } else {
        return recCount + 1;
      }
    });
  };

  const decreaseCount = () => {
    setRecCount((recCount) => {
      if (recCount === 0) {
        return recs.length - 1;
      } else {
        return recCount - 1;
      }
    });
  };

  return (
    <div className="recommendations__container">
      <div className="recommendations__content">
        <p className="recommendations__message">{recs[recCount].message}</p>
        <p className="recommendations__attribution">
          — {recs[recCount].attribution}
        </p>
      </div>
      <div className="recommendations__bottom">
        <div className="recommendations__info">
          <p className="recommendations__number">
            {recCount + 1}/{recs.length}
          </p>
          <div className="recommendations__actions">
            <ArrowLeft className="arrow__left" onClick={decreaseCount} />
            <ArrowRight className="arrow__right" onClick={increaseCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
