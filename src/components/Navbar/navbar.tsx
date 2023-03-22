import { Fragment } from "react";
import { Link } from "react-router-dom";
// import { ReactCom } from "../../assets/crown.svg";
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <CrwLogo className="logo" />
            </div>
          </div>
          <div className="center">
            <Link className="link" to="/">
              CRW
            </Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                About
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Contact
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Stores
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="icons"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
