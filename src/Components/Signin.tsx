import { useState } from "react";
import signimg from "../images/signin.jpg";
import "../scss/componentStyle/Signin.scss"; // Import your CSS file
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdArrowBack, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import OtpInput from "./OtpInput";
import useUserData from "../CustomHooks/useUserData";
import useGetuser from "../CustomHooks/useGetuser";
import { useNavigate } from "react-router-dom";
import Store from "../Zustand/Store";

//used for data store

const Signin = ({ show, setShow }: TDisplay) => {
  const setUserData = Store((state) => state.setUserData);
  const { setIsLogin } = Store();
  const navigation = useNavigate();
  const date = new Date();
  date.setMinutes(date.getMinutes() + 5); // Add 5 minutes to the current time

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const [inVaild, setInValid] = useState(false);
  const { getUserByPhoneNo, valid } = useGetuser(); //custom hook used match user OTP
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(true); // used to display the mobile number input box and otp enter div
  const [confirm, setConfirm] = useState(false);
  const { data, postData } = useUserData("http://localhost:3000/users"); //custom hook used to update or insert new user
  const Output = async (otp: string) => {
    setInValid(false); // to hide the  paragraph in sms (className) show if otp is invalid
    console.log(otp);
    await getUserByPhoneNo(phone, otp);
  };

  const otpGenerator = () => {
    setOtp(false);
    const otpNo = Math.floor(1000 + Math.random() * 9000);
    const myString: string = "" + otpNo;
    console.log(myString);
    const data = {
      phoneNo: phone,
      Otp: myString,
      expTime: date.toLocaleString("en-IN", options),
    };
    postData(data);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    if (value.length === 12) {
      setConfirm(true);
    }
    if (value.length < 12 && confirm) {
      setConfirm(false);
    }
  };
  const SubmitOtp = () => {
    console.log(valid);
    if (valid) {
      console.log("ok");
      if (valid) {
        setInValid(false);
        if (data) {
          console.log(data);
          if ("username" in data) {
            setUserData(data);
            setIsLogin(true);
            navigation(`/search`);
          } else {
            navigation(`/register?value=${data?.phoneNo}`);
          }
        }
      }
    } else {
      setInValid(true);
    }
  };
  return (
    <>
      {show && (
        <div className="page">
          <div className="cont">
            <div className="log-container">
              <h1>Login or sign up to continue</h1>
              <IoMdClose
                className="close-icon"
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className="content">
              <div className="img-box">
                <img src={signimg} alt="" />
                <div className="gradient-overlay"></div>
              </div>
              {otp && (
                <div className="phone-box ">
                  <div>
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={handlePhoneChange}
                      containerClass="phone-container"
                      inputClass="phoneno"
                      disableDropdown={true}
                      countryCodeEditable={false}
                    />
                  </div>
                  <p className="policy">
                    By proceeding you confirm that you are above 18 years of age
                    and agree to the{" "}
                    <span>Privacy Policy & Terms and Conditions.</span>
                  </p>
                  {confirm && (
                    <button
                      className="otp"
                      onClick={() => {
                        setInValid(false);
                        otpGenerator();
                      }}
                    >
                      Get OTP <MdOutlineKeyboardArrowRight className="icon" />
                    </button>
                  )}
                  <p className="gethelp">
                    Having trouble logging in? <a href="">Get Help</a>
                  </p>
                </div>
              )}

              {!otp && (
                <div className="show">
                  <div className="input-field">
                    <h4
                      onClick={() => {
                        setOtp(true);
                      }}
                    >
                      <span>
                        <MdArrowBack /> Back{" "}
                      </span>
                    </h4>
                    <h3>Enter OTP send to {phone}</h3>
                    <OtpInput length={4} Otpfunc={Output} />
                    <div className="sms">
                      {inVaild && (
                        <p className="invalid-otp">
                          Incorrect Otp entered. Please enter again
                        </p>
                      )}
                    </div>
                  </div>
                  <button className="continue" onClick={SubmitOtp}>
                    Continue <MdOutlineKeyboardArrowRight className="icon" />
                  </button>
                  <p className="gethelp">
                    Having trouble logging in? <a href="">Get Help</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;

type TDisplay = {
  show: boolean;
  setShow: (x: boolean) => void;
};
