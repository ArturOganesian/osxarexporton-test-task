import Faq from "../../components/faq/Faq";
import "./userQuantity.css";

const UserQunatity = () => {
  return (
    <>
      <div className="user-quantity-global-div">
        <div className="quantity-value">
          <span>22,394,946</span>
        </div>
        <div className="quantity-text">
          <span>Users have completed over 20 million Dynamis sessions</span>
        </div>
      </div>
      <hr></hr>
      <Faq />
     
    </>
  );
};

export default UserQunatity;
