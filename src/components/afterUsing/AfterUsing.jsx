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
            <p className="precent-animation">
              Instant pain relief
              <div class="percentage-container">
                <div class="percentage">98%</div>
              </div>
            </p>
            <p className="precent-animation">
              of Dynamis users felt they had instant relief of pain
              <div class="percentage-container">
                <div class="percentage">98%</div>
              </div>
            </p>
            <p className="precent-animation">
              Reduced stress
              <div class="percentage-container">
                <div class="percentage">80%</div>
              </div>
            </p>
            <p className="precent-animation">
              of Dynamis users felt they had better handle on their stress{" "}
              <div class="percentage-container">
                <div class="percentage">80%</div>
              </div>
            </p>
            <p className="precent-animation">
              Better Sleep Quality{" "}
              <div class="percentage-container">
                <div class="percentage">40%</div>
              </div>
            </p>
            <p className="precent-animation">
              of Dynamis users could sleep better and longer due to reduced pain{" "}
              <div class="percentage-container">
                <div class="percentage">40%</div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <Reviews />
    </>
  );
};

export default AfterUsing;
