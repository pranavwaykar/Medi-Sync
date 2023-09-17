import React from "react";
import "../styles/Doctors.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DoctorThree from "../images/Doctor-Three.png";
import DoctorTwo from "../images/Doctor-Two.png";
import DoctorOne from "../images/Doctor-One.png";


export default function Doctors() {
  return (
    <div id="doctors-section">
      <section className="heading" id="Doctors-list">
        <div className="text-center">
          <h1
            id="contactus"
            className="display-3"
            style={{ marginTop: "50px" }}>
            Doctors
          </h1>
          <hr className="w-25 mx-auto bg-dark" style={{ height: "3px" }} />
        </div>
      </section>

      <section className="container container-fluid">
        <div className="row mb-5">
          <div className="col-xl-4 card1">
            <div className="card">
              <a
                href="https://en.wikipedia.org/wiki/Doctor_Mike"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={DoctorOne}
                  className="card-img-top"
                  alt="Dr. Doctor Mike                  "
                  style={{ height: "380px" }}
                />
              </a>

              <div className="card-body">
                <h5 className="card-title">Dr. Doctor Mike</h5>
                <p className="card-text">
                  <a
                    href="https://en.wikipedia.org/wiki/Doctor_Mike"
                    target="_blank"
                    rel="noopener noreferrer">
                    Click to know more!
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 card2">
            <div className="card">
              <a
                href="https://en.wikipedia.org/wiki/Pixie_McKenna"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={DoctorTwo}
                  className="card-img-top"
                  alt="Dr. Pixie McKenna"
                  style={{ height: "380px" }}
                />
              </a>

              <div className="card-body">
                <h5 className="card-title">Dr. Pixie McKenna</h5>
                <p className="card-text">
                  <a
                    href="https://en.wikipedia.org/wiki/Pixie_McKenna"
                    target="_blank"
                    rel="noopener noreferrer">
                    Click to know more!
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 card3">
            <div className="card">
              <a
                href="https://en.wikipedia.org/wiki/Mehmet_Oz"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={DoctorThree}
                  className="card-img-top"
                  alt="Dr. Mehmet Oz"
                  style={{ height: "380px" }}
                />
              </a>

              <div className="card-body">
                <h5 className="card-title">Dr. Mehmet Oz</h5>
                <p className="card-text">
                  <a
                    href="https://en.wikipedia.org/wiki/Mehmet_Oz"
                    target="_blank"
                    rel="noopener noreferrer">
                    Click to know more!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
