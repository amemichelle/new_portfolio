import { Link } from "react-router-dom";
import "./projectheader.scss";
import { ReactComponent as ArrowLeft } from "../../assets/backarrow.svg";

function projectHeader(props) {
  return (
    <>
      <section className="p__header" style={{ backgroundColor: props.bgcolor }}>
        <Link to="/">
          <div className="p__arrow-div">
            <ArrowLeft className="p__arrow" />
          </div>
        </Link>
        <div className="p__logo-div">
          <img src={props.img} className="p__logo" />
        </div>
      </section>
    </>
  );
}

export default projectHeader;
