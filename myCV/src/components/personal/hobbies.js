import React from "react";
import "./_hobbies.css";

function Hobbies() {
  return (
    <div>
      <div className="personalSec hobbies m-auto d-flex justify-content-center align-items-center">
        <div className="uptofront">
          <div className="row justify-content-center">
            <div className="col-md-5  m-3 text-center h3">
              <i className="fas fa-swimmer fa-2x iconI"></i>
              <div>Swimming</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
              <i className="fas fa-gamepad fa-2x iconI"></i>
              <div>Video games</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
              <i className="far fa-futbol fa-2x iconI"></i>
              <div>Soccer</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
              <i className="fas fa-video fa-2x iconI"></i>
              <div>Watching shows</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
