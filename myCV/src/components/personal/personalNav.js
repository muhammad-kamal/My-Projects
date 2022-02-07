import React from "react";
import "./_personalNav.css";
import {Link , NavLink} from "react-router-dom";

function PersonalNav() {

let navItems = document.getElementsByClassName("nav-link");

const toggle = (e) => {
    for(let i=0; i < navItems.length;i++){
        navItems[i].classList.remove("active");
        e.target.classList.add("active")     
    }
}

  return (
    <div className="p-4  text-light">
      <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
        <li className="nav-item">
          <NavLink
            className="nav-link  navI text-light"
            id="Education"
            to="/"
            role="tab"
            onClick={(e) => toggle(e)}
          >
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link navI text-light"
            id="Hobbies"
            to="/Hobbies"
            role="tab"
            onClick={(e) => toggle(e)}
          >
            Hobbies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navI text-light" id="More" to="/More" role="tab" onClick={(e) => toggle(e)}>
            More
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PersonalNav;
