import "./firstShow.css";
import AboutPluses from "../about/AboutPluses";

const FirstShow = () => {
  return (
    <section className="global-first-body-div" id="aboutIt">
      <div className="first-title-div">
        <h1 className="title">
          <span>TENS/EMS</span> Massager
        </h1>
      </div>
      <div className="product-first-show">
        <img src="10.jpeg" alt="TENS/EMS Massager" />
        <div className="about-product">
          <h3>
            Engineered & Endorsed by Doctors: Your Pathway to Proven Pain Relief
          </h3>
          <ul>
            <p>
              <b>
                TENS/EMS Massager - meticulously designed by a top-tier
                podiatrist to deliver the relief you crave, exactly when you
                need it. Esteemed in the professional sphere and recommended
                for:
              </b>
            </p>
            <li>
              Individuals enduring foot pain from extensive standing or sitting.
            </li>
            <li>Those navigating the trials of foot and leg neuropathy.</li>
            <li>
              Diabetics, aiding enhanced blood circulation and averting foot
              issues.
            </li>
            <li>Sufferers of venous insufficiency.</li>
            <li>
              Anyone experiencing plantar fasciitis, cramps,
              osteoarthritis-related discomfort, or additional foot and leg
              pains.
            </li>
          </ul>
          <p>
            <b>
              All at an investment that’s less than 1/5 the price of a single
              therapeutic session, offering enduring results that will empower
              your every step, for life.
            </b>
          </p>
        </div>
      </div>

      <AboutPluses />
    </section>
  );
};

export default FirstShow;
