import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark container border border-5">
      <div className="container-fluid">
        <a className="navbar-brand  text-white" href="#/">
          <img
            src="https://picsum.photos/id/1010/200/100"
            alt="imagen leyendo"
            className="img-fluid rounded-pill"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/#">
                Link
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-md-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: 40, color: "white" }}
                />{" "}
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faCode}
                  style={{ fontSize: 40, color: "white" }}
                />{" "}
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: 40, color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
