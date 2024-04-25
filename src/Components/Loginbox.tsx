import { IoMdClose } from "react-icons/io";
import "../scss/Loginbox.scss";
import { Link } from "react-router-dom";

type Display = {
  show: boolean;
  setShow: (x: boolean) => void;
};

const Loginbox = () => {
  return (
    <>
      {show && (
        <div className="container">
          <div className="box1"></div>
          <div className="box2">
            <div className="close">
              <IoMdClose
                className="cls-btn"
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className="content">
              <div className="input-box">
                <h2>Log in or sign up to continue</h2>
                <input type="text" placeholder="+91" readOnly />
                <input type="number" placeholder="Enter mobile number" />
                <p>
                  By registering, you confirm that you are at least 18 years old
                  and agree to abide by the <span>Terms and Conditions.</span>
                </p>
              </div>
              <div className="otp">
                <button>Get OTP {">"}</button>
              </div>
            </div>
            <p>
              No Account ?{" "}
              <Link to="/Register" className="signup">
                Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loginbox;
