import Home from "./page/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./page/Single/Single";
import AdventurePage from "./components/adventure/adv";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react"; // Import useContext from react
import { Context } from "./context/Context";
import Write from "./page/write/Write";
import ArtPage from "./components/art/art";
import FestivalPage from "./components/festival/festival";
import Roadpage from "./components/roadtrip/roadtrip";
import Foodpage from "./components/food/food";

function App() {
  const { user } = useContext(Context); // Use useContext to access user

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/adv" element={<AdventurePage />} />
      </Routes>
      <Routes>
        <Route path="/art" element={<ArtPage />} />
      </Routes>
      <Routes>
        <Route path="/food" element={<Foodpage />} />
      </Routes>
      <Routes>
        <Route path="/road" element={<Roadpage />} />
      </Routes>
      <Routes>
        <Route path="/festival" element={<FestivalPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Write" element={user ? <Write/> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/Register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/Settings" element={user ? <Settings /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

