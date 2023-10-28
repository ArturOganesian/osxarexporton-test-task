import Reviews from "../../reviews/Reviews";
import "./afterUsing.css";

const AfterUsing = () => {
  return (
    <>
      <div className="global-after-using-div">
        <div className="all-after-us-info">
          <div className="after-us-title-div">
            <h2>How customers feel after using Dynamic</h2>
          </div>
          <div className="after-us-animation-text">
            <div className="precent-animation">
              Instant pain relief
              <div className="percentage-container">
                <div className="percentage">98%</div>
              </div>
            </div>
            <div className="precent-animation">
              of Dynamis users felt they had instant relief of pain
              <div className="percentage-container">
                <div className="percentage">98%</div>
              </div>
            </div>
            <div className="precent-animation">
              Reduced stress
              <div className="percentage-container">
                <div className="percentage">80%</div>
              </div>
            </div>
            <div className="precent-animation">
              of Dynamis users felt they had better handle on their stress{" "}
              <div className="percentage-container">
                <div className="percentage">80%</div>
              </div>
            </div>
            <div className="precent-animation">
              Better Sleep Quality
              <div className="percentage-container">
                <div className="percentage">40%</div>
              </div>
            </div>
            <div className="precent-animation">
              of Dynamis users could sleep better and longer due to reduced pain{" "}
              <div className="percentage-container">
                <div className="percentage">40%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Reviews />
    </>
  );
};

export default AfterUsing;
