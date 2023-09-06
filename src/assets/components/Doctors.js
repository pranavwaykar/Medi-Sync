import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Doctors() {
  return (
    <div>
      <section className="heading" id="Doctors-list">
        <div className="text-center">
          <h1
            id="contactus"
            className="display-3"
            style={{ marginTop: "50px" }}
          >
            Doctors
          </h1>
          <hr className="w-25  mx-auto bg-dark" style={{ height: "3px" }} />
        </div>
      </section>

      <section class="container container-fluid">
        <div class="row mb-5">
          <div class="col-xl-4 card1">
            <div class="card">
              <img
                src="https://a.mktgcdn.com/p/8jkhPn2mbM7YT5-FNENu4O_umZAHx0TfqKYXH-3k55k/1300x1300.jpg"
                // src="./images/Lara Aderson.jpg"
                class="card-img-top"
                alt="Dr. Lara Anderson"
              />

              <div class="card-body ">
                <h5 class="card-title">Dr. Lara Anderson</h5>
                <p class="card-text">
                  Dr. Lara Anderson graduated from Johns Hopkins University with
                  honors and received her training in Obstetrics and Gynecology
                  at the University of Chicago Medical Center. And have helped
                  over 227+ people across Asia.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Know More
                </a> */}
              </div>
            </div>
          </div>

          <div class="col-xl-4 card2">
            <div class="card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                // src="./images/Juan Alzate.jpg"
                class="card-img-top"
                alt="Dr. Juan Alzate"
              />

              <div class="card-body">
                <h5 class="card-title">Dr. Juan Alzate</h5>
                <p class="card-text">
                  Dr. Juan Alzate is a Board Certified Neurosurgeon, graduated
                  with honors from the Universidad Del Valle Medical School in
                  Colombia and received his training in Neurosurgery at the
                  Albert Einstein College of Medicine in New York City.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Know More
                </a> */}
              </div>
            </div>
          </div>

          <div class="col-xl-4 card3">
            <div class="card">
              <img
                src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                // src="./images/Anna.jpg"
                class="card-img-top"
                alt="Dr. Anna Stuart"
              />

              <div class="card-body">
                <h5 class="card-title">Dr. Anna Stuart</h5>
                <p class="card-text">
                  Dr. Anna Stuart Bagan graduated from Georgetown University and
                  completed her training in Ophthalmology at Rush University
                  Medical Center. Even have worked in Hirslanden Klinik Im Park
                  for 7 years. And have cured over 117+ people so far.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Know More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
