import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Home from "./Home";
import Doctors from "./Doctors";
import Patients from "./Patients";
import "../styles/Dashboard.css";

function Dashboard() {

  return (
    <Fragment>
      {/* navbar */}
      <Navbar />

      {/* Video Content */}
      <Home />

      {/* Placeholder Cards*/}
      <Doctors />

      {/*Patients Table Section*/}
      <Patients />
      
    </Fragment>
  );
}

export default Dashboard;
