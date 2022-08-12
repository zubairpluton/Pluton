import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Career,
  AboutUs,
  CustomWeb,
  BlockChain,
  MobileAppDev,
  WebDevelopment,
  SoftwareDev,
  CreativeDesign,
  DigitalMarketing,
  IslandGirl,
  BarterExchange,
} from "./pages/index";
import { Header, Jobform } from "./components/index";
import { Oluary } from "./assets/images";

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
          <Route path="/web-dev" element={<WebDevelopment />} />
          <Route path="/software-dev" element={<SoftwareDev />} />
          <Route path="/creative-design" element={<CreativeDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/case-study-2" element={<IslandGirl />} />
          <Route path="/case-study-3" element={<BarterExchange />} />
          {/* <Route path="/case-study-1" element={<Oluary />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
