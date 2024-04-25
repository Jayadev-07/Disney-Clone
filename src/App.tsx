import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Entry from "./Components/Entry";
import Login from "./pages/Login";
import MoviesList from "./Components/MoviesList";
import UserData from "./pages/UserData";
import ErrorPage from "./Components/ErrorPage";
import VideoPlayer from "./Components/VideoPlayer";
import HomePage from "./pages/HomePage";
import Webseries from "./Components/Webseries";
import WebseriesContent from "./Components/WebseriesContent";
import PrivatRouter from "./Components/PrivatRouter";
import Other from "./Components/Other";
import DisplayUserdata from "./Components/DisplayUserdata";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/search" element={<PrivatRouter><MoviesList /></PrivatRouter>} />
          <Route path="/register" element={<UserData />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/videoplayer" element={<PrivatRouter><VideoPlayer /></PrivatRouter>} />
          <Route path="/home" element={<PrivatRouter><HomePage /></PrivatRouter>} />
          <Route path="/series" element={<PrivatRouter><Webseries /></PrivatRouter>} />
          <Route path="/seriesseason" element={<PrivatRouter><WebseriesContent /></PrivatRouter>} />
          <Route path="/user" element={<DisplayUserdata/>} />
          <Route path="*" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </>
    // <><DisplayUserdata/></>
    // <><Back/></>
    // <><Webseries/></>
    // <><HomePage/></>
    // <><UserData/></>
    // <><MoviesList/></>
  );
};

export default App;
