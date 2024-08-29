import "./hackathons.scss";
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
import HackathonItem from "../HackathonItems/hackathonitems";

function Hackathons() {
  return (
    <>
      <div className="hackathon">
        <h2 className="hackathon__header">Hackathon History</h2>
        <p className="hackathon__subheader">
          View my projects for many of these events on{" "}
          <a
            href="https://devpost.com/michelle_swolfs?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            className="devpost"
          >
            Devpost ↗
          </a>
        </p>

        <HackathonItem
          name="Hacking for Humanity"
          date="2019"
          award={false}
          img={cfcImg}
        ></HackathonItem>
        <HackathonItem
          name="PennApps XX"
          date="2019"
          award={false}
          img={stllspaceImg}
        ></HackathonItem>
        <HackathonItem
          name="nwHacks"
          date="2020"
          award={true}
          img={rebuildImg}
        ></HackathonItem>
        <HackathonItem
          name="SystemHacks"
          date="2020"
          award={true}
          img={snapfoodImg}
        ></HackathonItem>
        <HackathonItem
          name="Adobe x Netflix Creative Jam"
          date="2020"
          award={false}
        ></HackathonItem>
        <HackathonItem
          name="cmd+F"
          date="2020"
          award={false}
          img={amplifyImg}
        ></HackathonItem>
        <HackathonItem
          name="Just Design"
          date="2020"
          award={true}
          img={genNowImg}
        ></HackathonItem>
        <HackathonItem
          name="BC Game Jam"
          date="2020"
          award={true}
        ></HackathonItem>
        <HackathonItem
          name="Revive"
          date="2021"
          award={false}
          img={reviveImg}
        ></HackathonItem>
        <HackathonItem
          name="Adobe x Target Creative Jam"
          date="2021"
          award={true}
        ></HackathonItem>

        <HackathonItem
          name="TOHacks"
          date="2021"
          award={true}
          img={vaccineInfoImg}
        ></HackathonItem>
        <HackathonItem
          name="ElleHacks"
          date="2022"
          award={false}
          img={textSafeImg}
        ></HackathonItem>
        <HackathonItem
          name="Sparks Designathon"
          date="2023"
          award={true}
          img={vizitImg}
        ></HackathonItem>
      </div>
    </>
  );
}

export default Hackathons;
