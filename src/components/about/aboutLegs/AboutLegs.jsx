import MoreInfo from "../moreInfo/MoreInfo";
import "./aboutLegs.css";
const AboutLegs = () => {
  return (
    <div className="about-legs-global-div">
      <div className="legs-info-title">
        <h1>Refresh Your Legs & Feet, Naturally and Safely!</h1>
      </div>
      <div className="legs-info-img">
        <div className="img-legs-div">
          <img src="6.jpg" alt="applicable-user" />
        </div>
        <div className="legs-text-div">
          <p>
            <b>
              Discover a realm of effortless leg and foot rejuvenation with our
              cutting-edge technology, harmonizing deep massages with instant
              relief from cramps, swollen ankles, stiffness, and foot soreness.
              Our electrical pulse technology not only invigorates your blood
              circulation but also diminishes varicose veins' appearance,
              granting your legs a wonderfully light and liberated feeling.
            </b>
          </p>
          <ul>
            <li>
              {" "}
              Banish Cramps: Provide instant and effective relief from painful
              cramps <span>✓</span>
            </li>
            <li>
              Beauty and Comfort: Erase water retention and cellulite, enhancing
              both your legs' look and feel <span>✓</span>
            </li>
            <li>
              Sleep Soundly: Improved sleep thanks to relief from nocturnal leg
              pain and a soothed nervous system <span>✓</span>
            </li>
            <li>
              {" "}
              Neuropathy No More: Find comfort from neuropathic pain while
              supporting cellular regeneration and restoring nerve function{" "}
              <span>✓</span>
            </li>
            <li>
              FDA-Approved & Side-Effect Free: Safe, reliable, and clinically
              approved relief <span>✓</span>
            </li>
          </ul>
          <div className="attention-div">
            <span style={{ color: "red" }}>Attention !!!</span>
            <p>
              Not recommended for individuals with pacemakers or pregnant women.
            </p>
          </div>
        </div>
      </div>

      <MoreInfo />
    </div>
  );
};

export default AboutLegs;
