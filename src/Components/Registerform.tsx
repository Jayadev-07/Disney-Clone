import { Link } from "react-router-dom";
import regimg from "../images/register.svg";
import "../scss/componentStyle/Registerform.scss";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Form = {
  name: string;
  email: string;
  mobileno: string;
  password: string;
};
const Registerform = () => {
  const history = useNavigate();

  const [fetch, setFetch] = useState(true);
  const [data, setData] = useState<Form[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3031/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetch]);

  const [detail, setDetail] = useState<Form>({
    name: "",
    email: "",
    mobileno: "",
    password: "",
  });
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const store = async (e: React.FormEvent<HTMLFormElement>) => {
    var validation = true;
    const usernameInput = document.getElementById(
      "display",
    ) as HTMLInputElement;
    const div = document.querySelector(".error-disp") as HTMLDivElement;
    const alphregex = /^[a-zA-Z]{5,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.{8,})/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    const user = { ...detail };
    const emailExist = data.some((e) => {
      return e.email === user.email;
    });
    const mobilenoExist = data.some((e) => {
      return e.mobileno === user.mobileno;
    });
    if (!alphregex.test(user.name)) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML =
        "Username can't be empty or can't contain numbers, atleast 5 char";
      div.style.display = "block";
    }
    if (!passwordRegex.test(user.password)) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML =
        "Password must contain at least 8 char, one uppercase, one special char";
      div.style.display = "block";
    }
    if (!emailRegex.test(user.email)) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML = "Please enter a valid email address";
      div.style.display = "block";
    }
    if (user.mobileno.length < 10 || user.mobileno.length > 10) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML = "Please enter a valid mobile number";
      div.style.display = "block";
    }
    if (emailExist) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML = "Email address already exist";
      div.style.display = "block";
    }

    if (mobilenoExist) {
      validation = false;
      usernameInput.innerHTML = "";
      usernameInput.innerHTML = "Mobile no already exist";
      div.style.display = "block";
    }

    if (validation) {
      try {
        setFetch(!fetch);
        await axios.post("http://localhost:3031/users", { ...detail });
        history("/");
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };
  return (
    <section>
      <div className="form-container">
        <form onSubmit={store}>
          <div className="heading">
            <img src={regimg} />
            <h2>Register your detail to sign up</h2>
          </div>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Jon Aria"
              autoComplete="off"
              onChange={handle}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="jonaria@gmail.com"
              autoComplete="off"
              onChange={handle}
            />
          </div>
          <div className="input-box">
            <label htmlFor="mobileno">Mobile No</label>
            <input
              type="number"
              name="mobileno"
              id="mobileno"
              placeholder="043-6250-3658"
              autoComplete="off"
              onChange={handle}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              onChange={handle}
            />
          </div>
          <div className="submitbtn">
            <button type="submit">Register</button>
            <p>
              By creating an account, you agree to our private policies,
              <a href="/terms-and-conditions">Terms and Conditions</a>.
            </p>
          </div>
        </form>
        <div className="signin">
          <p>
            Already have an account?{" "}
            <Link to="/Login" className="redirect">
              Sign in
            </Link>
          </p>
        </div>
        <div className="error-disp">
          <IoMdClose
            className="close"
            onClick={() => {
              const div = document.querySelector(
                ".error-disp",
              ) as HTMLDivElement;
              div.style.display = "none";
            }}
          />
          <p id="display"></p>
        </div>
      </div>
    </section>
  );
};

export default Registerform;
