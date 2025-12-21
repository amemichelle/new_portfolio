import "./project.scss";
import { motion } from "framer-motion";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import interviews from "../../assets/cultivate-interviews.png";
import ModalImage from "react-modal-image";
import cultivateGroup from "../../assets/cultivate_group.png";
import cultivateSignIn from "../../assets/cultivate_sign-up.png";
import cultivateAddJob from "../../assets/cultivate_add-job.png";
import cultivateScreen from "../../assets/cultivate_tv.png";
import cultivateReview from "../../assets/cultivate_review.png";

function Cultivate() {
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
        <ProjectHeader img={cultivateGroup} bgcolor="#8EAF6E" />

        <div className="content">
          <div className="content__box">
            <p className="content__summary">
              Cultivate Inclusivity is a web platform that helps to faciliate
              the connection between employers, employment agencies, and those
              with barriers to employment.
            </p>

            <p className="divider">Key Information</p>
            <div className="context__container">
              <div classsName="content__group" id="context">
                <p className="content__story-heading">
                  A course project in collaboration with the City of Vancouver
                  to drive positive societal impact.
                </p>

                <p className="content__body">
                  Cultivate Inclusivity was made as a part of the Civic
                  Innovation Change Lab (CICL) program, an initiative created by
                  Radius SFU, CityStudio, and the City of Vancouver. CICL is a
                  9-credit program where interdisciplinary students form teams
                  to develop a project under the umbrella of civic innovation.
                </p>

                <p className="content__body">
                  The project was well received in terms of both class
                  assessment and with the general public. Aside from an academic
                  setting, the project was submitted to SFU’s Opportunity Fest
                  2020, and CityStudio’s Hubub 14: The Digital Edition.
                  Cultivate Inclusivity was able to win 1st Place and
                  Entrepreneur’s Choice awards at Opportunity Fest.
                </p>
              </div>

              <div className="bullets" id="context-bullets">
                <div className="bullets__box">
                  <p className="bullets__heading">Created</p>
                  <p className="bullets__text">Jan. - Apr. 2020</p>
                </div>

                <div className="bullets__box">
                  <p className="bullets__heading">Team</p>
                  <p className="bullets__text">Bradley Sarandi</p>
                  <p className="bullets__text">Camille Cabuniag</p>
                  <p className="bullets__text">Yoonji Choi</p>
                </div>

                <div className="bullets__box">
                  <p className="bullets__heading">Tools</p>
                  <p className="bullets__text">Figma</p>
                  <p className="bullets__text">Google Suite</p>
                </div>
              </div>
            </div>

            <p className="divider">Problem Space</p>
            <div className="content__group">
              <div className="pull-quote">
                <p className="pull-quote__body">
                  Did you know that 250+ agencies provide services to vulnerable
                  residents in the Downtown Eastside (DTES) each day?
                </p>

                <a
                  className="content__inline-link"
                  href="https://vancouversun.com/news/metro/downtown-eastside-260-agencies-housing-sites-crowd-downtown-eastside-with-video-and-map"
                  target="_blank"
                  rel="noreferrer"
                >
                  — Vancouver Sun
                </a>
              </div>
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__body">
                  However, it is difficult to track the social and financial
                  investments being made in the community due to the lack of
                  coordination and collaboration. As investigating and
                  understanding the countless amount of services offered was
                  impossible to do in the available time period, we narrowed
                  this down to taking a deeper look into employment services in
                  the DTES.
                </p>
              </div>

              <div className="content__group">
                <p className="content__body">
                  Even beginning to understand the complexity surrounding the
                  personal and societal effects that lead to an individual
                  developing barriers to employment is a massive undertaking.
                  That is why, this project was informed by secondary research
                  and informal interviews with a number of organizations in
                  Vancouver’s Downtown Eastside (DTES). Throughout the 4 month
                  term, we visited and interviewed 15 organizations, seen below.
                </p>
              </div>
            </div>

            <div className="content__bg-max">
              <ModalImage
                small={interviews}
                large={interviews}
                className="project__img"
                alt="image of company logos we conducted interviews with"
              />
            </div>

            <p className="divider">Target Audience & Insights</p>

            <div className="content__group">
              <p className="content__body">
                Three key parties emerged as a result of our interivews and
                secondary research:
              </p>

              <div className="people">
                <div className="people__group">
                  <p className="content__hl">1. Business Owners</p>
                  <p className="content__body">
                    Socially responsible business owners in the Downtown
                    Eastside need an easy, accessible way to hire individuals
                    with barriers to employment to solve their inconsistent
                    labour needs.
                  </p>
                </div>
                <div className="people__group">
                  <p className="content__hl">2. Employment Agencies</p>
                  <p className="content__body">
                    Employment agencies need tailored resources to readily meet
                    the needs of the Downtown Eastside’s community members.
                  </p>
                </div>
                <div className="people__group">
                  <p className="content__hl">3. Community Members</p>
                  <p className="content__body">
                    Individuals with barriers to employment need support through
                    employment with purpose, regardless of what that purpose may
                    be.
                  </p>
                </div>
              </div>

              <div className="content__group">
                <p className="content__story-heading">
                  To further expand the resiliency of the Downtown Eastside, the
                  community needs a supportive employment opportunity that
                  addresses the needs of three key community groups: local
                  businesses, agencies, and individuals.
                </p>
              </div>
            </div>

            <p className="divider">Solution</p>

            <div className="content__bg-max">
              <iframe
                src="https://www.youtube.com/embed/9jIuIIjwMYY?si=CJZz8adqpXpKpDAh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__story-heading">
                  Cultivate Inclusivity is a web platform which helps to:
                </p>
                <ul>
                  <li className="bullets__text-insights">
                    empower local businesses in their role as employers to hire
                    inclusively in their communities.
                  </li>

                  <li className="bullets__text-insights">
                    support employment agencies by providing them with a
                    customer relationship management tool that is tailored to
                    their needs
                  </li>

                  <li className="bullets__text-insights">
                    provide short-term work for individuals with barriers to
                    employment
                  </li>
                </ul>
              </div>
            </div>

            <p className="divider">How it Works</p>
            <div className="content__bg-max">
              <img src={cultivateSignIn} className="project__img" />
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__story-heading">
                  Getting on the platform is different for each group.
                </p>

                <ul>
                  <li className="bullets__text-insights">
                    <span className="bold">Employers</span> register their
                    business through the Cultivate Inclusivity website.
                  </li>
                  <li className="bullets__text-insights">
                    <span className="bold">Employment Agencies</span> partner
                    with Cultivate Inclusivity by contacting the Cultivate
                    Inclusivity team.
                  </li>

                  <li className="bullets__text-insights">
                    <span className="bold">Community Members</span> are able to
                    opt-in for registration if the employment agency they are
                    with is an existing Cultivate Inclusivity partner.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="content__bg-max">
              <img src={cultivateAddJob} className="project__img" />
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__story-heading">
                  Employers add jobs to the system via the online portal.
                </p>

                <p className="content__body">
                  These jobs appear on screens set up inside of partnered
                  employment agencies around the Downtown Eastside.
                </p>
              </div>
            </div>

            <div className="content__bg-max">
              <img src={cultivateScreen} className="project__img" />
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__story-heading">
                  Community members can speak with employment agencies to fill
                  shifts displayed on screen.
                </p>

                <p className="content__body">
                  Employment agencencies can inform employers that individuals
                  will be coming to work for their posted shift.
                </p>
              </div>
            </div>

            <div className="content__bg-max">
              <img src={cultivateReview} className="project__img" />
            </div>

            <div className="content__group-main">
              <div className="content__group">
                <p className="content__story-heading">
                  After the shift has been completed by a community member,
                  employers can review the shift.
                </p>

                <p className="content__body">
                  Reviews will be shared with the appropriate employment agency
                  for their records, and to share with the individual who
                  completed the shift.
                </p>

                <p className="content__body">
                  <span className="bold">Community members</span> can also
                  review the employer at their next visit to the employment
                  agency.
                </p>
              </div>
            </div>

            <p className="divider">Validation</p>
            <div className="solution-box">
              <div className="content__group">
                <div className="pull-quote">
                  <p className="pull-quote__body">
                    “One of the challenges with hiring for [our food recover
                    program] is that our food processing shifts will be
                    unpredictable, responding to the availability of surplus
                    food. This platform answers to this challenge, enabling us
                    to hire barriered employees for one-off shifts. Because of
                    that, this collaboration could be a real win-win!”
                  </p>

                  <p className="pull-quote__attribution">
                    — Social Programs Coordinator @ Potluck Cafe
                  </p>
                </div>
              </div>
            </div>

            <p className="divider">Reflection</p>
            <div className="content__group-main">
              <p className="content__story-heading">
                A transformative experience learning about genuine empathy and
                how to conduct research respectifully.
              </p>

              <p className="content__body">
                This projects taught me a lot both personally and
                professionally. Personally, this project taught me what empathy
                really is. Through conducting and attending interviews in
                Vancouver’s Eastside, I had the opportunity to witness the
                experiences of people with barriers to employment, and the
                people that support them, which allowed me to step into the
                shoes of people with very different experiences to myself.
              </p>

              <p className="content__body">
                Professionally, this project gave me a lot of different
                constraints when compared to a typical academic project. One of
                the biggest ones was the idea of a limited or non-existent
                access to technology. How does one create a system for multiple
                people without access to a device? Without access to an address?
                Internet? How does one account for a large variety of different
                use cases? This project also got me to challenge my preconceived
                notion of how people might engage with technology.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Cultivate;
