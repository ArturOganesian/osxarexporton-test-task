import AboutLegs from "./aboutLegs/AboutLegs";
import "./aboutPluses.css";

const AboutPluses = () => {
  return (
    <div className="about-pluses-global-div">
      <div className="title-pluses-div">
        <h1>Unlock Pain-Free Legs in Just 15 Minutes!</h1>
      </div>
      {/* <hr></hr> */}
      <div className="img-info-div">
        <div className="img-div">
          <img src="2.jpg" alt="massager-pluses" />
        </div>
        <div className="pluses-text">
          <ul>
            <p>
              <b>
                Welcome to a world where your legs and feet can feel blissfully
                pain-free in just 15 minutes a day! Our easy-to-use massager
                sends gentle pulses to your muscles, melting away tension and
                bringing instant comfort.
              </b>
            </p>
            <li>
              Ease Various Pains: Say goodbye to Plantar Fasciitis, Neuropathy,
              and inflammation <span>✓</span>
            </li>
            <li>
              Support for High Blood Pressure: A gentle approach to managing
              your wellness <span>✓</span>
            </li>
            <li>
              Less Swelling, More Moving: Quickly reduce swelling and boost your
              blood flow <span>✓</span>
            </li>
            <li>
              Feel the Difference Instantly: Nearly all users (96.6%!) felt
              immediate relief <span>✓</span>
            </li>
            <li>
              Try Risk-Free: Enjoy a 45-day, hassle-free money-back guarantee{" "}
              <span>✓</span>
            </li>
            <li>
              Easy and Portable: Take your lightweight, easy-to-use pain relief
              wherever you go <span>✓</span>
            </li>
          </ul>
        </div>
      </div>
      <AboutLegs />
    </div>
  );
};

export default AboutPluses;
