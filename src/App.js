import "./App.css";
import Home from "./assets/components/Home";
import Login from "./assets/components/Login";
import Protected from "./assets/components/Protected";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Protected Component={Home} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
