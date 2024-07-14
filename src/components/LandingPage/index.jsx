import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container row herorow">
      <div className="column md-6">
        <h5 className="subHeading">Designing with Empathy</h5>
        <h1 className="heading">
          <span style={{ color: "#7a5cf7" }}>Coding</span> Innovation
        </h1>
        <h4 className="hisName mt-3">Jean Yves Gatwaza</h4>
        <p className="mt-4 lead description">
          Computer Science & Economics @{" "}
          <a
            href="https://www.harvard.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harvard University
          </a>
        </p>
        <div className="d-flex my-4">
          <button
            className="btn btn-primary mx-2"
            style={{ backgroundColor: "#7a5cf7", border: "none" }}
          >
            Schedule a meeting
          </button>
          <button className="btn btn-dark mx-2">
            My Resume <i className="bi bi-download"></i>
          </button>
        </div>
        <div className="d-flex ">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:email@example.com" className="mx-2">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="tel:+1234567890" className="mx-2">
            <i className="bi bi-telephone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
