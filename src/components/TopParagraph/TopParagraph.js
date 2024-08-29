import "./topparagraph.scss";
import sparklegroup from "../../assets/sparklegroup.svg";
import singlesparkle from "../../assets/singlesparkle.svg";

function TopParagrah() {
  return (
    <>
      <div className="top-paragraph">
        <div className="top-paragraph__container">
          <div className="big__container">
            <h1 className="big__title">Hiya, I’m Michelle! </h1>
            <div className="big__sparkle-container">
              <img src={sparklegroup} className="sparkle-group" />
            </div>
          </div>
          <p className="big__desc">
            I’m a spirited Product Designer creating inviting spaces on the
            internet by blending cross-disciplinary knowledge with a passion for
            customer advocacy.
          </p>

          <div className="list__container">
            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">Living in Vancouver, Canada</p>
            </div>

            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">
                Currently designing @
                <a
                  href="http://deltacontrols.com/"
                  target="_blank"
                  class="list__inline"
                >
                  Delta Controls ↗
                </a>
              </p>
            </div>

            <div className="list__item">
              <img src={singlesparkle} className="single-sparkle" />
              <p className="list__desc">Tinkering with React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopParagrah;
