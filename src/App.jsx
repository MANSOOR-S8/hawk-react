import "./App.css";
import Nav from "./components/navbar/Nav";
import Cards from "../src/components/cards/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotorBike from "./components/Motorbike/MotorBike";
import Boxing from "./components/Boxing/Boxing";
import SportsBall from "./components/SportsBall/SportsBall";
import Hockey from "./components/Hockey/Hockey";
import MartialArt from "./components/MartialArt/MartialArt";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<SportsBall />} />
            <Route
              path="/components/SportsBall/SportsBall"
              element={<SportsBall />}
            />
            <Route path="/components/Hockey/Hockey" element={<Hockey />} />
            <Route
              path="/components/MartialArt/MartialArt"
              element={<MartialArt />}
            />
            <Route path="/components/Boxing/Boxing" element={<Boxing />} />
            <Route
              path="/components/Motorbike/MotorBike"
              element={<MotorBike />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
