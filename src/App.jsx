
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Naily from "./components/Naily.jsx";
import About from "./components/About.jsx";
import Japan from "./components/Japan.jsx";

function App() {
  return (
    <Routes>
      <Route path="/Portfolio" element={<Home />}/>
      <Route path="/naily" element={<Naily />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/japan" element={<Japan />}/>
    </Routes>
  );
}

export default App;
