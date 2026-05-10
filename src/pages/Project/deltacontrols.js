import "./project.scss";
import { motion } from "framer-motion";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import cultivateGroup from "../../assets/cultivate_group.png";

function DeltaControls() {
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
        <ProjectHeader img={cultivateGroup} bgcolor="#6C0E0E" />

        <div className="content">
          <div className="content__box">
            <p className="content__summary">
              Delta Controls is a B2B company that develops smart systems to
              manage building operations (like HVAC, lighting, and access) while
              reducing energy use and costs.
            </p>
            <p className="divider"> Key Information</p>

            <div className="content__group-main">
              <p className="content__body">
                At Delta Controls, I work as the primary Product Designer for
                the Room Control Enterprise (RCE).
                <a
                  href="https://deltacontrols.com/products/proviso/"
                  target="_blank"
                >
                  Proviso
                </a>
                is a mobile application that allows installers to connect and
                configure Delta Controls devices through Bluetooth and NFC.
                <a
                  href="https://deltacontrols.com/products/seymour-connect/"
                  target="__blank"
                >
                  Seymour Connect
                </a>
                is a mobile application for building occupants to control their
                environment.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default DeltaControls;
