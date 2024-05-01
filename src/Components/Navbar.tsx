import "../scss/componentStyle/Navbar.scss";
import disney from "../images/disneyplus.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { BiCameraMovie, BiCategory, BiSearch } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiVolleyballBold } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Store from "../Zustand/Store";
const Navbar = () => {
<<<<<<< Updated upstream
  const { IsLogin } = Store();
=======
  const { IsLogin, UserData } = Store();
>>>>>>> Stashed changes
  const [hover, setHover] = useState(false);
  const AddclassList = () => {
    const Items: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(".linker");
    Items.forEach((ele) => {
      ele.classList.remove;
    });
  };
  return (
    <div className="nav">
      <div>
        <div className="logo-box">
          <img src={disney} className="logo" />
          {!UserData.subscription && (
            <button className="subscribe">
              <Link to="/payment" className="linker-sub">
                Subscribe <MdOutlineKeyboardArrowRight className="icon" />
              </Link>
            </button>
          )}
        </div>
        <div className="holder">
          <div
            className="content-icons"
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="icon-div">
              <Link to={IsLogin ? "/user" : "/Login"} className="linker">
                <FaRegUserCircle
                  className="icons icon1"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover ? <h4 className="text">Profile</h4> : <h4></h4>}
              </Link>
            </div>
            <div className="icon-div">
              <Link to="/search" className="linker">
                <BiSearch
                  className="icons icon2"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover && <h4 className="text">Search</h4>}
              </Link>
            </div>
            <div className="icon-div">
              <Link to="/home" className="linker">
                <GoHomeFill
                  className="icons icon3"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover && <h4 className="text">Home</h4>}
              </Link>
            </div>
            <div className="icon-div">
              <Link to="/movies" className="linker">
                <BiCameraMovie
                  className="icons icon5"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover && <h4 className="text">Movies</h4>}
              </Link>
            </div>
            <div className="icon-div">
              <Link to="/series" className="linker">
                <PiVolleyballBold
                  className="icons icon6"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover && <h4 className="text">Series</h4>}
              </Link>
            </div>
            <div className="icon-div">
              <Link to="/category" className="linker">
                <BiCategory
                  className="icons icon7"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                />{" "}
                {hover && <h4 className="text">Categories</h4>}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {hover && <section className="shadow"></section>}
    </div>
  );
};

export default Navbar;
