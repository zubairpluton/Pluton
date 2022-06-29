import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Career,
  AboutUs,
  CustomWeb,
  BlockChain,
  MobileAppDev,
} from "./pages/index";
import { Header, Jobform } from "./components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job-apply" element={<Jobform />} />
          <Route path="/custom-web" element={<CustomWeb />} />
          <Route path="/blockchain-dev" element={<BlockChain />} />
          <Route path="/mobile-app-dev" element={<MobileAppDev />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
