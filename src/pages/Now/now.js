import "./now.scss";
import Navbar from "../../components/Navbar/navbar";
import calendarIcon from "../../assets/calendaricon.svg";
import BooksBox from "../../components/BooksBox/booksbox";
import ASID from "../../assets/asid.jpg";
import LastLetter from "../../assets/last-letter-from-your-lover.jpg";
import HundredLoves from "../../assets/thousand-loves-of-juliet.jpg";
import TomorrowandTomorrow from "../../assets/tomorrow-and-tomorrow.jpg";
import HouseofMarrione from "../../assets/house-of-marrione.webp";
import LightBetweenOceans from "../../assets/light-between-oceans.jpg";
import Powerless from "../../assets/powerless.jpg";

function Now() {
  return (
    <>
      <Navbar></Navbar>
      <section className="context">
        <div className="context__container--alt">
          <div className="context__heading-stack">
            <h1 className="context__title">Now</h1>
            <h2 className="context__desc">
              This is what I am currently up too.. more or less.
            </h2>
            <div className="context__icon-text">
              <img src={calendarIcon} alt="" />
              <p className="context__date">As of 06/08/24</p>
            </div>
          </div>
          <h3 className="page__heading">Reads of This Year so far</h3>
          <div className="books">
            <BooksBox
              title="The Last Letter from Your Lover"
              author="Jojo Moyes"
              img={LastLetter}
            />

            <BooksBox
              title="A Study in Drowning"
              author="Ava Reid"
              img={ASID}
            />

            <BooksBox
              title="The Hundred Loves of Juliet"
              author="Evelyn Skye"
              img={HundredLoves}
            />
            <BooksBox
              title="Tomorrow and Tomorrow and Tomorrow"
              author="Gabrielle Zevin"
              img={TomorrowandTomorrow}
            />
            <BooksBox
              title="House of Marionne"
              author="J. Elle"
              img={HouseofMarrione}
            />
            <BooksBox
              title="The Light Between Oceans"
              author="M.L. Stedman"
              img={LightBetweenOceans}
            />

            <BooksBox title="Powerless" author="M.L. Stedman" img={Powerless} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Now;
