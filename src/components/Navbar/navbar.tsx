import { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
//import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";
import "./navbar.scss";

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
              CRWN
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
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
