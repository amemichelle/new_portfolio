import "./project.scss";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import spreadsheetExample from "../../assets/spreadsheet.jpg";
import messengerExample from "../../assets/messenger.jpg";
import igPost from "../../assets/igpost.jpg";
import igMessage from "../../assets/igmessage.jpg";
import boxpalslogo from "../../assets/boxpals.svg";

function Boxpals() {
  return (
    <>
      {/* <ProjectHeader img={boxpalslogo} bgcolor="#004921" /> */}
      <div className="content">
        <div className="content__box">
          <p className="content__summary">
            Boxpals is a group order management solution that allows people in
            the same locale to benefit from the economic and environmental
            benefits of ordering from retailers together (as opposed to
            individually).
          </p>
          <div className="content__bg-max">
            <iframe
              src="https://www.youtube.com/embed/qaVvrXjcfbc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="content__img-caption">
              Recorded demo of developed version of Boxpals, presented at
              BrainStation's demo day.
            </p>
          </div>
          <p className="divider">Key Information</p>
          <div className="context__container">
            <div className="content__group" id="context">
              <p className="content__story-heading">
                A way to continue my learning & development post-graduation.
              </p>

              <p className="content__body">
                Boxpals was created as the final project for BrainStation’s
                part-time web development program. The primary goal of the
                project is to showcase learnings from the program in a
                self-directed project that was to be completed in addition to
                regular course work.
              </p>
              <p className="content__body">
                As this project was course work, the product remains
                hypothetical. However, the project exceeded expectations by
                receiving a grade of 98% and was well received by both the
                teaching team and the public at BrainStation’s quarterly demo
                day.
              </p>
            </div>

            <div className="bullets" id="context-bullets">
              <div className="bullets__box">
                <p className="bullets__heading">Created</p>
                <p className="bullets__text">January - March 2023</p>
              </div>

              <div className="bullets__box">
                <p className="bullets__heading">For</p>
                <p className="bullets__text">
                  BrainStation web development program
                </p>
              </div>

              <div className="bullets__box">
                <p className="bullets__heading">Tools</p>
                <ul className="bullets__list">
                  <li className="bullets__text">Figma + Figjam</li>
                  <li className="bullets__text">Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="divider">Process</p>

          <div className="content__group-main">
            <p className="content__story-heading">
              Where to start: combining personal experience with secondary
              research
            </p>
            <p className="content__body">
              With
              <a
                className="content__inline-link"
                href="https://www.retaildive.com/news/study-one-third-of-discretionary-income-is-now-spent-online/540920/"
                target="_blank"
              >
                “one third of consumer’s monthly discretionary income [now
                being] spent online,”
              </a>
              probably including my own, I decided to delve into research about
              online shopping by reflecting on my own habits, and secondary
              sources.
            </p>
          </div>
          <div className="content__group">
            <div className="pull-quote">
              <p className="pull-quote__body">
                “
                <span className="pull-quote__highlight">
                  Products’ packaging contributes in large part to CO2 emissions
                </span>
                from producing plastics, polluting ecosystems as well as adding
                enormous amounts of waste to our landfills.”
              </p>

              <p className="pull-quote__body">
                “The
                <span className="pull-quote__highlight">
                  transport of goods across the world is responsible for a huge
                  portion of CO2 emissions generated by e-commerce.
                </span>
                In 2020, the shipping and return of products accounted for 37%
                of the total GHG emissions.”
              </p>

              <a
                className="content__inline-link"
                href="https://earth.org/online-shopping-and-its-environmental-impact/#:~:text=The%20transport%20of%20goods%20across,of%20the%20total%20GHG%20emissions."
                target="_blank"
              >
                — Martina Igini, Managing Editor @ earth.org
              </a>
            </div>
          </div>
          <div className="content__group-main">
            <p className="content__body">
              I uncovered how the shipping and over-packing of goods are some of
              the largest contributors to the environmental impact of online
              shopping, and was surprised how that related to my own
              experiences, which led to the question:
            </p>
          </div>
          <div className="content__group">
            <p className="content__story-heading-main">
              How might we lower the environmental impact of online shopping of
              discretionary purchases without losing consumer interest and
              harming business owners’ bottom line?
            </p>
          </div>
          <div className="content__group-main">
            <p className="content__body">
              Upon further reflection, I realized that this question has already
              been addressed through how I, along with many others, order items
              we are not in a rush for. Two examples that come to mind are:
            </p>

            <p className="content__body">
              Locally, I have organized and participated in online orders where
              my friends and I have ordered from the same retailers together in
              order to reach common discount thresholds or to save on shipping
              costs. This directly decreases the environmental impact of these
              purchases by reducing amount of shipping materials necessary to
              fufill them.
            </p>
          </div>

          <div className="content__examples">
            <div className="content__bg">
              <img className="content__images" src={spreadsheetExample} />
            </div>

            <div className="content__bg">
              <img className="content__images-tall" src={messengerExample} />
            </div>
          </div>
          <div className="content__group">
            <p className="content__body caption"></p>
            However, group orders between friends commonly results in
            spreadsheet management or disorganized instant messages.
          </div>
          <div className="content__group">
            <div className="content__body">
              On a larger scale, a community that has utilized this group buy
              model is the k-pop buy/sell/trade community. Businesses such as
              Neokyo and Buyee, as well as proxy services such as K-Friday,
              support group order managers is obtaining products from overseas
              (in this case South Korea). Fans join these group orders in order
              to obtain items for cheaper than from stores in close proximity,
              and save on shipping and other external costs.
            </div>
          </div>
          <div className="content__examples">
            <div className="content__bg">
              <img className="content__images" src={igPost} />
            </div>

            <div className="content__bg">
              <img className="content__images" src={igMessage} />
              <p className="content__body">*info blurred for privacy</p>
            </div>
          </div>
          <div className="content__group">
            <p classNmae="content__body caption">
              Group orders in this context are advertised and managed
              exclusively through social media (most commonly Instagram) and
              spreadsheets.
            </p>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Insights</p>

            <ol>
              <li className="bullets__text">
                Online orders containing multiple items ultimately benefit
                businesses, customers, and the planet.
              </li>
              <ol className="bullets__layered">
                <li className="bullets__text">
                  For businesses: Businesses receiving large orders (as opposed
                  to multiple smaller ones) is ultimately more profitable for
                  business owners. This is reinforced by the idea of a minimum
                  order quantity (MOQ) that many large businesses implement.
                </li>

                <li className="bullets__text">
                  For customers: Customers save money by reaching thresholds for
                  additional savings, which would be harder to reach alone.
                </li>

                <li className="bullets__text">
                  For the planet: Ordering in groups plays a part in reducing
                  carbon emissions from shipping and packaging by requiring less
                  resources.
                </li>
              </ol>
              <li className="bullets__text">
                The idea of a “group order” is not new, but has not been widely
                taken advantage of in many applicable use cases.
              </li>
            </ol>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Solution</p>
            <p className="content__body">
              Boxpals is a group order management platform that allows friends
              and people within the same locale to place online orders together
              without the hassle of extra tools. By ordering together, By
              ordering together, people are able to reduce their carbon
              footprint by placing bulk shipments instead of several smaller
              ones, and reach thresholds for additional monetary savings which
              would be much harder to do individually.
            </p>
          </div>
          <div className="content__group">
            <p className="content__body">
              A key factor that shaped this project was technical constraints.
              Due to the nature of the course, there was much larger emphasis on
              meeting development requirements compared to design outcomes. As
              the sole designer and developer, balancing both design and
              development on this project outside of my full time role and my
              coursework majorily shaped the outcome that I was able to produce
              within the time constraints.
            </p>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Validation</p>
            <div className="pull-quote">
              <p className="pull-quote__body">
                ”Overall you did an amazing job with your capstone! Boxpals is a
                fun and useful application that would benefit any group looking
                for a way to shop together […] You should be proud of your hard
                work an and diligent work ethic that helped you create such a
                fun project. I can’t wait to see the final version implemented
                in my own life!”
              </p>

              <p className="pull-quote__body">
                — Senior Developer & member of BrainStation teaching team.
              </p>
            </div>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Reflection</p>
            <p className="content__body">
              As a designer by trade, I’m proud of that I was able to build this
              proof of concept within the time constraints, using both my design
              background and my knew learnings in full stack development. There
              are so many things that I would go back and add to this project if
              I had the time. Some of the main ideas include, a group order
              manager view or dashboard and a more technically advanced method
              of inputting items in order to reduce cognitive overhead and
              increase usability. There are also a number of smaller additions
              that I believe would benefit people, such as account statuses to
              know what stage people are at in the group order process, a better
              integrated notifications, and an integrated method to complete
              payments whether through something like Stripe or other means.
            </p>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Appendix</p>
            <p className="content__body" id="appendix-body">
              On the development side of things, the tech stack for Boxpals is
              as follows:
            </p>

            <div className="bullets">
              <div className="bullets__box">
                <p className="bullets__heading">Client</p>
                <ul className="bullets__list">
                  <li className="bullets__text">Javascript (React.js) </li>
                  <li className="bullets__text">CSS (SASS) </li>
                  <li className="bullets__text">HTML </li>
                </ul>
              </div>

              <div className="bullets__box">
                <p className="bullets__heading">Server</p>
                <ul className="bullets__list">
                  <li className="bullets__text">Node </li>
                  <li className="bullets__text">Express </li>
                  <li className="bullets__text">Knex </li>
                  <li className="bullets__text">Axios</li>
                  <li className="bullets__text">mySQL database </li>
                </ul>
              </div>

              <div className="bullets__box">
                <p className="bullets__heading">Libraries</p>
                <ul className="bullets__list">
                  <li className="bullets__text">Framer Motion</li>
                  <li className="bullets__text">react-select </li>
                  <li className="bullets__text">react-functional-modal </li>
                  <li className="bullets__text">react-router-dom</li>
                  <li className="bullets__text">react-toastify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxpals;
