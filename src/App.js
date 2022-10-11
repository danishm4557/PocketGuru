import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Components/Calculator/Calculator";
import Stopwatch from "./Components/Clock/Stopwatch";
import Timer from "./Components/Clock/Timer";
import Map from "./Components/Map/Map";
import News from "./Components/News/News";
import Weather from "./Components/Weather/Weather";
import Notes from "./Components/Notes/Notes"
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div>
      <MetaTags>
        <title> PocketGuru - The Guru Which Does it All </title>
        <meta name="description" content="Your PocketGuru with all the tools you will need today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og-title" content="PocketGuru - The Guru Which Does it All" />
        <meta property="og-description" content="Your PocketGuru with all the tools you will need today." />
        <meta property="og-image" content="./img/pocketGuru-homepage-screenshot.png" />
      </MetaTags>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/clock/Stopwatch" element={<Stopwatch />} />
          <Route path="/clock/Timer" element={<Timer />} />
          <Route path="/map" element={<Map />} />
          <Route path="/news" element={<News />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
