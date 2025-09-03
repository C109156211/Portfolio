
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Naily from "./components/Naily.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/naily" element={<Naily />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
