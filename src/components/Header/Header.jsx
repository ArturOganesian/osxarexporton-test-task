import "./header.css";
import { Menu, Switch } from "antd";

const Header = () => {
  return (
    <div className="header-global-div">
      <div className="header-logo">
        <p>
          <a href="#top">
            <span>Oscar</span>
            <span>Exporton</span>
          </a>
        </p>
      </div>

      <div className="navbar">
        <a className="nav-link" href="#aboutIt">
          Product
        </a>
        <a className="nav-link" href="#moreInfo">
          About it
        </a>
        <a className="nav-link" href="#reviews">
          reviews
        </a>

        <a className="nav-link" href="#footer">
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Header;
