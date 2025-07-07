import "./about.scss";
import Hackathons from "../../components/Hackathons/hackathons";
import ResumeItem from "../../components/ResumeItem/ResumeItem";
import Recommendations from "../../components/rec/rec";
import clock from "../../assets/clock.svg";
import headphones from "../../assets/headset.svg";
import circleQuestion from "../../assets/circlequestion.svg";
import configPhoto from "../../assets/configphoto.jpg";


function About() {




  return (
    <>
        <div className="about__top">
          <div className="about__top-card">
          <div
            className="about__top-container"
          >

            <div className="about__card" style={{ zIndex: "1" }}>
              <div className="about__card-left">
                <div className="card__photo-container">
                  <img className="card__photo" src={configPhoto} />
                </div>
              </div>
              <div className="about__card-right">
                <div className="card__header">
                  <p className="card__name">Michelle Swolfs</p>
                  <p className="card__desc">Designer who ships (sometimes)</p>
                </div>
                <ul className="card__item-list">
                  <li className="card__item">
                    <img src={clock} />
                    <p className="card__item-text">
                      Pacific standard time (PST)
                    </p>
                  </li>
                  <li className="card__item">
                    <img src={headphones} />
                    <p className="card__item-text">Often wearing headphones</p>
                  </li>
                  <li className="card__item">
                    <img src={circleQuestion} />
                    <p className="card__item-text">
                      May work faster than anticipated
                    </p>
                  </li>
                </ul>

                <p className="card__caption">
                  *Making and breaking things (responsibly) since 2020.
                </p>
              </div>
            </div>
          </div>
                 <blockquote className="indent">
                  <p className="summary__content">
                    Hey there! I’m a Product Designer with 4+ years of
                    experience, bringing value to both startups and larger
                    companies through design and code.
                  </p>
                  </blockquote>

          </div>

          <div className="horizontal">

                <div className="resume-things">
                  <ResumeItem />
                </div>

                <div className="hackathon-things">
                  <Hackathons />
                </div>
            </div>

     

        <div className="rec-container">
        <Recommendations/>
        </div>
        
      </div>

    
    </>
  );
}

export default About;
