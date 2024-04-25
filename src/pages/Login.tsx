import { useState } from "react";
import Loginbtn from "../Components/Loginbtn";
import "../scss/pagesStyle/login.scss";
import Navbar from "../Components/Navbar";
import Signin from "../Components/Signin";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="login">
      <Navbar></Navbar>
      <Loginbtn setShow={setShow} />
      <Signin show={show} setShow={setShow} />
    </div>
  );
};

export default Login;
