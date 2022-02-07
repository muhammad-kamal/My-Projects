import React from "react";
import "./_headBody.css";
import 'animate.css';

function HeadBody() {
  return (
    <div>
      <div className="image">
      </div>
      <div className="barI"></div>
      <div className="intro text-center p-4"><div className="animate__animated animate__slideInLeft">Muhammad Kamal Al quwatli</div></div>
      <div className="summary text-center p-4"><div className="animate__animated animate__slideInRight">A Front-end Developer</div></div>
    </div>
  );
}

export default HeadBody;
