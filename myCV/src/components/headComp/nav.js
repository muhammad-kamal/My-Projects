import React from "react";
import "./_nav.css";

function Nav() {
  return (
    <div>
      <div className="container navStyle p-1">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container-fluid container">
            <div className="navbar-brand logo">KAMAL</div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    className="nav-link text-light nLink text-center"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light nLink text-center" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light nLink text-center" href="#personal">
                    Personal Info
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light nLink text-center" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
