import "./App.css";
import Dashboard from "./assets/components/Dashboard";
import Home from "../src/assets/components/Home";
import Doctors from "../src/assets/components/Doctors";
import Patients from "../src/assets/components/Patients";
import Login from "./assets/components/Login";
import Protected from "./assets/components/Protected";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Protected Component={Dashboard} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
