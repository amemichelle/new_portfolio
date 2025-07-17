import "./project.scss";
import { motion } from "framer-motion";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import ModalImage from "react-modal-image";
import guustogroup from "../../assets/guusto_group.png";
import guustomobilebefore from "../../assets/guusto_mobile-before.png";
import guustomobileafter from "../../assets/guusto_mobile-after.png";
import guustomarketingcurrent from "../../assets/guusto_marketing-current.png";
import guustomarketingproposed from "../../assets/guusto_marketing-proposed.png";
import guustositeassets from "../../assets/guusto_site-assets.png";

function Guusto() {
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
        <div className="content">
          <div className="content__box">
            <ProjectHeader img={guustogroup} bgcolor="#717FAE"></ProjectHeader>

            <div className="content__group-main">
              <p className="content__body">
                During my 3+ years at Guusto, I had the opportunity to be
                involved in a wide scope of projects that required a number of
                different skill sets. Including. but not limited to:
              </p>
            </div>

            <div className="content__examples">
              <div className="content__bg alt">
                <p className="content__body">Before</p>
                <ModalImage
                  small={guustomobilebefore}
                  large={guustomobilebefore}
                  alt="Past version of Guusto mobile application"
                  className="project__img"
                />
              </div>

              <div className="content__bg alt">
                <p className="content__body">After</p>

                <ModalImage
                  small={guustomobileafter}
                  large={guustomobileafter}
                  alt="Updated version of Guusto mobile application"
                  className="project__img"
                />
              </div>
            </div>
            <div className="solution-box">
              <div className="content__group-main">
                <p className="content__section-heading">Product Design</p>
                <p className="content__body">
                  On the product side, I was in charge of refreshing, updating,
                  and maintaining the company’s mobile application on the design
                  side, as well as creating the user flows for key product
                  integrations such as Microsoft Teams and Slack.
                </p>
              </div>
            </div>

            <div className="content__examples">
              <div className="content__bg alt">
                <p className="content__body">Current</p>

                <ModalImage
                  small={guustomarketingcurrent}
                  large={guustomarketingcurrent}
                  alt="Proposed Guusto marketing website"
                  className="project__img"
                />
              </div>

              <div className="content__bg alt">
                <p className="content__body">Proposed</p>

                <ModalImage
                  small={guustomarketingproposed}
                  large={guustomarketingproposed}
                  alt="Current Guusto marketing website"
                  className="project__img"
                />
              </div>
            </div>
            <div className="solution-box">
              <div className="content__group-main">
                <p className="content__section-heading">Brand & Identity</p>
                <p className="content__body">
                  In terms of brand design, I played a major role in the
                  execution of a significant brand update to bring consistency,
                  clarity, and detailed documentation regarding the company’s
                  messaging and visual identity across as number of platforms.
                </p>
              </div>
            </div>
            <div className="content__group">
              <div className="content__bg-max">
                <ModalImage
                  small={guustositeassets}
                  large={guustositeassets}
                  alt="Current Guusto marketing website"
                  className="project__img"
                />
              </div>

              <div className="content__group-main">
                <p className="content__section-heading">Web Development</p>
                <p className="content__body">
                  Lastly, I was the main developer in charge of implementing
                  changes to the company’s marketing website, which you can view
                  at
                  <a
                    href="https://guusto.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="content__inline-link"
                  >
                    guusto.com
                  </a>
                </p>
              </div>
            </div>

            <div className="divider">Conclusion</div>
            <div className="content__group-main">
              <p className="content__story-heading">
                A significant portion of my work is under a NDA (mainly work
                that has not been published).
              </p>

              <p className="content__body">
                As I work on developing the best showcase of my work that I can,
                feel free to reach out via
                <a
                  href="mailto:swolfsmichelle8@gmail.com"
                  className="content__inline-link"
                >
                  email
                </a>
                or on
                <a
                  href="https://www.linkedin.com/in/michelleswolfs/"
                  className="content__inline-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                with any questions about my work.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Guusto;
