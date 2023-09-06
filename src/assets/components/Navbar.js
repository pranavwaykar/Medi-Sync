import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const getemail = localStorage.getItem("emaildata");

const handleClick = () => {
  localStorage.clear();
};

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-container navbar-expand-lg  navbar-light bg-dark bg-gradient sticky-lg-top ">
        <div className="container-fluid">
          {/* navbar brand img start */}
          <Link className="navbar-brand " to="/">
            <img id="logo-img"
              // style={{ height: "50px", width: "90%" }}
              src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
              alt="image"
            />
            
          </Link>
          {/* navbar brand img end*/}

          {/* heading start */}
          <div className="nav-brand lead text-light ">
            <h1 id="heading-title"> MediSync </h1>
          </div>
          {/* heading end */}

          {/* toggle button start */}
          
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* toggle button end */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto f-right mb-0">
              <li className="nav-item m-auto f-right">
                <Link
                  className="nav-link "
                  aria-current="page"
                  style={{ color: "red" }}
                ></Link>
              </li>
              <li className="email m-3">
                <h2 class="email-nav text-center" id="email-heading" style={{ color: "white" }}>
                  {getemail}
                </h2>
              </li>

              <li className="nav-item f-right m-auto">
                {/* <NavLink className="btn btn-outline-dark btn-info" to="/" onClick={handleClick} role="button">Logout</NavLink> */}
                <NavLink to="/">
                  <button
                    className="btn btn-danger btn-md  "
                    onClick={handleClick}
                    type="submit"
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
