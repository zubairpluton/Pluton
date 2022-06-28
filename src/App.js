import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Career, AboutUs, CustomWeb } from "./pages/index";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
