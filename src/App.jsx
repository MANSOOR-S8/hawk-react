import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import MotorBike from "./components/Motorbike/MotorBike";
import Boxing from "./components/Boxing/Boxing";
import SportsBall from "./components/SportsBall/SportsBall";
import Hockey from "./components/Hockey/Hockey";
import MartialArt from "./components/MartialArt/MartialArt";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<SportsBall />} />
        <Route path="/SportsBall" element={<SportsBall />} />
        <Route path="/Hockey" element={<Hockey />} />
        <Route path="/MartialArt" element={<MartialArt />} />
        <Route path="/Boxing" element={<Boxing />} />
        <Route path="/MotorBike" element={<MotorBike />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
