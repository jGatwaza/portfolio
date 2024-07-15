import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./LandingPage.css";
import resume from "../../assets/resume.pdf";
const LandingPage = () => {
  return (
    <div className="container row herorow">
      <div className="column md-6">
        <h5 className="subHeading">Designing with Empathy</h5>
        <h1 className="heading">
          <span style={{ color: "#5032A8" }}>Coding</span> Innovation
        </h1>
        <h4 className="hisName mt-3">Jean Yves Gatwaza</h4>
        <p className="mt-4 lead description">
          Computer Science & Economics @{" "}
          <a
            href="https://www.harvard.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="harvardLabel"
          >
            Harvard University
          </a>
        </p>
        <div className="d-flex my-4">
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#7a5cf7", border: "none" }}
          >
            {" "}
            <a
              className="text-decoration-none"
              target="__Blank"
              href="https://calendly.com/gatwaza/30min"
            >
              Schedule a meeting<i className="bi bi-calendar jyIcon1"></i>
            </a>
          </button>
          <button className="btn btn-dark">
            <a href={resume} className="text-decoration-none" target="__blank">
              My Resume <i className="bi bi-download jyIcon"></i>
            </a>
          </button>
        </div>
        <div className="d-flex socialIcons">
          <a
            href="https://www.linkedin.com/in/jean-yves-gatwaza-7897861b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/jGatwaza"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:jgatwazakubwimana@college.harvard.edu"
            className="mx-2"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a href="tel:+8577069663" className="mx-2">
            <i className="bi bi-telephone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
