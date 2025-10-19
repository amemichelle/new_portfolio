import "./marketingproject.scss";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";

import Navbar from "../../components/Navbar/navbar";
import blogpost1 from "../../assets/blog-post-1.jpg";
import blogpost2 from "../../assets/blog-post-2.jpg";
import blogpost3 from "../../assets/blog-post-3.jpg";

import ytthumb1 from "../../assets/yt-thumbnail-1.png";
import ytthumb2 from "../../assets/yt-thumbnail-2.png";
import ytthumb3 from "../../assets/yt-thumbnail-3.png";

import amabanner1 from "../../assets/amabanner-1.jpg";
import amabanner2 from "../../assets/amabanner-2.jpg";
import amabanner3 from "../../assets/amabanner-3.jpg";

import stormhacks21post1 from "../../assets/stormhacks21-post-1.png";
import stormhacks21post2 from "../../assets/stormhacks21-post-2.png";
import stormhacks21post3 from "../../assets/stormhacks21-post-3.png";
import stormhacks21story1 from "../../assets/stormhacks21-story-1.png";
import stormhacks21story2 from "../../assets/stormhacks21-story-2.png";
import stormhacks21story3 from "../../assets/stormhacks21-story-3.png";

import stormhacks22post1 from "../../assets/stormhacks22-post-1.png";
import stormhacks22post2 from "../../assets/stormhacks22-post-2.png";
import stormhacks22post3 from "../../assets/stormhacks22-post-3.png";
import stormhacks22story1 from "../../assets/stormhacks22-story-1.png";
import stormhacks22story2 from "../../assets/stormhacks22-story-2.png";
import stormhacks22story3 from "../../assets/stormhacks22-story-3.png";

import ymhaevent1 from "../../assets/ymha-event-1.png";
import ymhaevent2 from "../../assets/ymha-event-2.png";
import ymhaevent3 from "../../assets/ymha-event-3.png";

function MarketingProject() {
  return (
    <>
      <motion.div
        className="page__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <div className="container__box">
          <div className="container">
            <h2 className="graphics__header">
              <span>Guusto</span> - Blog Post Graphics
            </h2>
            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={blogpost1}
                large={blogpost1}
                alt="vector graphic of a file folder container a calculator, tablet, and sheets of paper."
              />
              <ModalImage
                className="graphics__img"
                small={blogpost2}
                large={blogpost2}
                alt="vector graphic of a laptop of a couch, with negative iconography inside of bubbles coming from it."
              />
              <ModalImage
                className="graphics__img"
                small={blogpost3}
                large={blogpost3}
                alt="vector graphic of a clipboard with a sheet of paper and a post it note reading your points program inside of a trash can."
              />
            </div>

            <h2 className="graphics__header">
              <span>Guusto</span> - Video Thumbnails
            </h2>

            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={ytthumb1}
                large={ytthumb1}
                alt="graphic of the open drop representative and the founder of Guusto next to the one drop logo."
              />
              <ModalImage
                className="graphics__img"
                small={ytthumb2}
                large={ytthumb2}
                alt="graphic of the founder of Guusto with a venn diagram representing their ace culture model in the background."
              />
              <ModalImage
                className="graphics__img"
                small={ytthumb3}
                large={ytthumb3}
                alt="graphic of the Guusto platform with an image of a Guusto gift card in the background."
              />
            </div>

            <h2 className="graphics__header">
              <span>Guusto</span> - Webinar Graphics
            </h2>

            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={amabanner3}
                large={amabanner3}
                alt="Graphic for an event titled Equitable Framework for Recognition, with photos of Noah Warder and Shelley Dacosta on it."
              />
              <ModalImage
                className="graphics__img"
                small={amabanner1}
                large={amabanner1}
                alt="Graphic for an event titled Is Your Team Really Engaged? with photos of Joe Facciolo and Kwesi Thomas on it."
              />
              <ModalImage
                className="graphics__img"
                small={amabanner2}
                large={amabanner2}
                alt="Alternative graphic for an event titled Is Your Team Really Engaged."
              />
            </div>

            <h2 className="graphics__header">
              <span>SFU Surge</span> - Stormhacks '22 Content
            </h2>

            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={stormhacks22post1}
                large={stormhacks22post1}
                alt="Vector graphic of an otter and papaer craft animals in the sky, for Heroku Workshop and Team formation events."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks22post2}
                large={stormhacks22post2}
                alt="Vector graphic of two otters inside of a present box, on a graphic regarding the winners of a social media giveaway."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks22post3}
                large={stormhacks22post3}
                alt="Vecotr graphic of two otters on a cloud surrounded by papercraft animals, with the text What did we dream up together? above it."
              />

              <ModalImage
                className="graphics__img"
                small={stormhacks22story1}
                large={stormhacks22story1}
                alt="Instagram story version of the Heroku Workshop and Team Formation social events"
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks22story2}
                large={stormhacks22story2}
                alt="Instagram story version of the social media winner graphic."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks22story3}
                large={stormhacks22story3}
                alt="Instagram story of an otter with a reminder notification, reminding participants that they are running out of time to RSVP for StormHacks."
              />
            </div>

            <h2 className="graphics__header">
              <span>SFU Surge</span> - Stormhacks '21 Content
            </h2>

            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={stormhacks21post1}
                large={stormhacks21post1}
                alt="Vector graphic of a hologram otter, displaying information about a AR/VR workshop powered byh echoAR"
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks21post2}
                large={stormhacks21post2}
                alt="Vector graphic  of a browser and numerous otters, also displaying the information of how to enter a social media giveaway."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks21post3}
                large={stormhacks21post3}
                alt="Vector graphic representing an excel spreadsheet listing out the reasons of why to apply to StormHacks."
              />

              <ModalImage
                className="graphics__img"
                small={stormhacks21story1}
                large={stormhacks21story1}
                alt="Instagram story version of the AR/VR event graphic."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks21story2}
                large={stormhacks21story2}
                alt="Instagram story version of the graphic instructing people how to enter the social media giveaway."
              />
              <ModalImage
                className="graphics__img"
                small={stormhacks21story3}
                large={stormhacks21story3}
                alt="Instagram story of the StormHacks 2021 Instagram tag challenge"
              />
            </div>

            <h2 className="graphics__header">
              <span>Youth Mental Health Association</span> - Facebook Event
              Graphics
            </h2>

            <div className="container__graphics">
              <ModalImage
                className="graphics__img"
                small={ymhaevent1}
                large={ymhaevent1}
                alt="Facebook event graphic for the Youth Mental Health Association's event on COVID-19 and it's impact on mental health services."
              />
              <ModalImage
                className="graphics__img"
                small={ymhaevent2}
                large={ymhaevent2}
                alt="Facebook event graphic for the Youth Metal Health Association's event on maintaining your mental health in university."
              />
              <ModalImage
                className="graphics__img"
                small={ymhaevent3}
                large={ymhaevent3}
                alt="Facebook event graphic for the Youth Mental Health Association's event on how nutrition and food impact mental health."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MarketingProject;
