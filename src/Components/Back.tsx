import { useNavigate } from "react-router";
import "../scss/componentStyle/BackButton.scss";
import { MdKeyboardBackspace } from "react-icons/md";

const Back = () => {
  const navigator = useNavigate();
  const Backbutton = () => {
    navigator(-1);
  };
  return (
    <div className="back">
      <button onClick={() => Backbutton()}>
        <MdKeyboardBackspace />
      </button>
    </div>
  );
};

export default Back;
