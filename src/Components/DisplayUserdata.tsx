import "../scss/componentStyle/DisplayUserdata.scss";
import logo from "../images/disneyplus.svg";
import Store from "../Zustand/Store";
import { IUserDataType } from "../Zustand/Store";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const DisplayUserdata = () => {
  const navigator = useNavigate();
  const { UserData, setUserData, setIsLogin } = Store();
  const Logout = () => {
    setUserData({} as IUserDataType);
    setIsLogin(false);
    navigator("/");
  };
  return (
    <div className="user-section-item">
      <Navbar />
      <div className="user-content-item">
        <img src={logo} />
        <h1>Hello, {UserData.username}</h1>
        <h2>Welcome to the disney world</h2>
      </div>
      <button onClick={() => Logout()} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default DisplayUserdata;
