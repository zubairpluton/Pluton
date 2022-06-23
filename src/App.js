import "./App.css";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Career } from "./pages/index";
import { Header, Jobform } from "./components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job-apply" element={<Jobform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
