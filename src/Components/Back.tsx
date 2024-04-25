import { useNavigate } from "react-router"
import "../scss/componentStyle/BackButton.scss"

const Back = () => {
    const navigator = useNavigate();
    const Backbutton = () => {
        navigator(-1);
    }
  return (
    <div className="back">
      <button onClick={()=>Backbutton()}>Back</button>
    </div>
  )
}

export default Back
