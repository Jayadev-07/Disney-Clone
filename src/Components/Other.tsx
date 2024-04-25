import { Link } from "react-router-dom";
import "../scss/componentStyle/Other.scss";
const Other = () => {
  return (
    <div className="other-container">
      <div>
        <h1>Page not found</h1>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Other;
