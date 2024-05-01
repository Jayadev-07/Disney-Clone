import "../scss/componentStyle/DisplayUserdata.scss";
import logo from "../images/disneyplus.svg";
import Store from "../Zustand/Store";
import { IUserDataType } from "../Zustand/Store";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
const DisplayUserdata = () => {
  const navigator = useNavigate();
  const { UserData, setUserData, setIsLogin } = Store();
<<<<<<< Updated upstream
=======
  const [display, setDisplay ] = useState("");
>>>>>>> Stashed changes
  const Logout = () => {
    setUserData({} as IUserDataType);
    setIsLogin(false);
    navigator("/");
  };
  useEffect(() => {
    if (UserData?.subscription) {
      const d = new Date(UserData?.subscription);
      console.log(d.toDateString())
      setDisplay(d.toDateString());
    }
  }, [UserData]);

  return (
    <div className="user-section-item">
      <Navbar />
      <div className="user-content-item">
        <img src={logo} />
        <h1>Hello, {UserData.username}</h1>
        <h2>Welcome to the disney world</h2>
        {(UserData.subscription) && (
          <>
            <h1>Subscribed</h1>
            <p>Your plan ends at {display}</p>
          </>
        )}
      </div>
      <button onClick={() => Logout()} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default DisplayUserdata;
