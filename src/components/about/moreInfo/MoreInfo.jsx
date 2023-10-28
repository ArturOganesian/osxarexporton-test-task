import "./moreInfo.css";

const MoreInfo = () => {
  return (
    <div className="global-more-info-div" id="moreInfo">
      <div className="more-info-title">
        <h1>Say Farewell to Swollen Calves and Ankles Once and For All</h1>
      </div>
      <div className="more-info-img-div">
        <div className="more-info-text">
          <p>
            <b>
              Step into a world where pain is a distant memory, with our
              massager that does more than just provide a momentary respite.
              Using the pioneering TENS and EMS technology, it tackles pain
              right where it originates. Immerse yourself in a wave of unique,
              specially-formulated pulses that do more than just soothe - they
              ignite your blood circulation, target the precise nerves in your
              feet, and encourage the repair of damaged cells.
            </b>
          </p>

          <div className="more-info-list">
            <ul>
              <h4>Embrace a technology that:</h4>
              <li>
                Provides immediate pain alleviation <span>✓</span>
              </li>
              <li>
                Accelerates healing through enhanced blood flow <span>✓</span>
              </li>
              <li>
                Bolsters strength, flexibility, and mobility <span>✓</span>
              </li>
              <li>
                Revitalizes the health of your feet <span>✓</span>
              </li>
              <li>
                Minimizes swelling and inflammation <span>✓</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="more-info-imgs">
          <img src="1.jpg" alt="massager" />
          <img src="8.jpg" alt="massager-complect" />
          <img src="9.jpeg" alt="massager-modes" />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
