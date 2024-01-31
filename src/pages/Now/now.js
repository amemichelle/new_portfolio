import "./now.scss";
import Navbar from "../../components/Navbar/navbar";
import calendarIcon from "../../assets/calendaricon.svg";

function Now() {
  return (
    <>
      <Navbar></Navbar>
      <section className="context">
        <div className="context__container">
          <div className="context__heading-stack">
            <h1 className="context__title">Now</h1>
            <div className="context__icon-text">
              <img src={calendarIcon} />
              <p className="context__date">As of 12/22/23</p>
            </div>
          </div>
          <h2 className="context__desc">
            This is what I am currently up too.. more or less.
          </h2>
        </div>
      </section>
    </>
  );
}

export default Now;
