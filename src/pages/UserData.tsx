import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "../scss/pagesStyle/UserData.scss";
import { useLocation } from "react-router";
import useUserList from "../CustomHooks/useUserList";
import { Tdata } from "../CustomHooks/useUserList";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import Store from "../Zustand/Store";
const UserData = () => {
  const setUserData = Store((state) => state.setUserData);
  const { setIsLogin } = Store();
  const navigator = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passedValue = searchParams.get("value");
  const { getUserByPhoneNo, putUserData, userData, complete, userInfo } =
    useUserList();
  const previousUserDataRef = useRef<Tdata[]>();
  const [user, setUser] = useState<Tuser>({ username: "", age: 0, gender: "" });
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  const selectGender = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log("hello");
    const target = e.target as HTMLElement;
    const genders = document.querySelectorAll(".gender");
    genders.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
    console.log(target.innerHTML);
    setUser((prev) => ({ ...prev, gender: target.innerHTML }));
  };

  /* useeffect used for put data to user which is fetched from form */
  useEffect(() => {
    if (userData.length > 0 && userData !== previousUserDataRef.current) {
      const dataItem = {
        ...userData[0],
        ...user,
      };
      Putdata(dataItem);
      previousUserDataRef.current = userData;
    }
  }, [userData]);

  /* used to navigate to the home page if user data is registered successfully or show error page  */
  useEffect(() => {
    console.log(userInfo);
    if (complete && userInfo) {
      setUserData(userInfo);
      setIsLogin(true);
      navigator("/search");
    }
  }, [complete]);

  const Putdata = async (data: any) => {
    await putUserData(data);
  };

  const Submit = async (e: FormEvent) => {
    e.preventDefault();
    if (passedValue !== null) {
      await getUserByPhoneNo(passedValue);
    }
  };
  return (
    <section className="container">
      <div className="form-container">
        <h3>ALMOST THERE</h3>
        <h1>Tell us more about you</h1>
        <div className="profile">
          <img src={logo} />
        </div>
        <form onSubmit={Submit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <p>Your Gender</p>
          <div className="gender-type">
            <span
              className="gender"
              onClick={(e) => {
                selectGender(e);
              }}
            >
              Male
            </span>
            <span
              className="gender"
              onClick={(e) => {
                selectGender(e);
              }}
            >
              Female
            </span>
            <span
              className="gender"
              onClick={(e) => {
                selectGender(e);
              }}
            >
              Other
            </span>
            <span
              className="gender"
              onClick={(e) => {
                selectGender(e);
              }}
            >
              Prefer not to say
            </span>
          </div>
          <button type="submit">Create your profile</button>
        </form>
      </div>
    </section>
  );
};

export default UserData;

type Tuser = {
  username: string;
  age: number;
  gender: string;
};
