import React from "react";
import "./_more.css";
import theImg from "./me1.jpg";


function More() {
  return (
    <div>
      <div className="personalSec more m-auto d-flex justify-content-center align-items-center flex-wrap">
        <div className="moreImg">
          <img src={theImg} className="img-fluid" />
        </div>
        <div className="uptofront m-2 moreData" >
          <p className="lead">Date of birth : May 3, 1997</p>
          <p className="lead">Marital status : single</p>
          <p className="lead">Military service : deferred</p>
        </div>
      </div>
    </div>
  );
}

export default More;