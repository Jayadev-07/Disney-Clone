import starimg from "../images/my_space_login_in.webp";
import "../scss/componentStyle/Loginbtn.scss";

const Loginbtn = ({ setShow }: TDisplay) => {
  return (
    <div className="log-btn">
      <img src={starimg} />
      <h1>Login to Disney+ Hotstar</h1>
      <p>
        Start watching from where you left off, personalize for kids and more
      </p>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Loginbtn;

type TDisplay = {
  setShow: (x: boolean) => void;
};
