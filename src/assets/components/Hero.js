import React from "react";
import doctorDemo from "../videos/doctorDemo.mp4";

export default function Hero() {
  return (
    <>
      <div className="vid-container">
        <video src={doctorDemo} autoPlay loop muted />
      </div>
      <div className="vid-content">
        <h1 className="hero-slogan" data-text="HMS">Syncing Success in Healthcare</h1>
        {/* <p style={{ position: "absolute", top: "440px", left: "660px" }}>
        Syncing Success in Healthcare
        </p> */}
      </div>
    </>
  );
}
