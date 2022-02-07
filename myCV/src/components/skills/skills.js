import React, { useEffect, useState, useRef } from "react";
import "./_skills.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Skills() {
  // HTML skill counter
  var h = document.getElementById("h");
  const [hcounter, sethcounter] = useState(0);
  useInterval(() => {
    if (hcounter < 90 && window.scrollY >= 200) {
      sethcounter(hcounter + 1);
      h.style.animation = "progresH 1s linear";
    }
  }, 10);

  // css skill counter
  var c = document.getElementById("c");
  const [ccounter, setccounter] = useState(0);
  useInterval(() => {
    if (ccounter < 80 && window.scrollY >= 200) {
      setccounter(ccounter + 1);
      c.style.animation = "progresC 1.2s linear";
    }
  }, 10);

  // js skill counter
  var js = document.getElementById("js");
  const [jcounter, setjcounter] = useState(0);
  useInterval(() => {
    if (jcounter < 70 && window.scrollY >= 200) {
      setjcounter(jcounter + 1);
      js.style.animation = "progresJS 1.2s linear";
    }
  }, 10);

  // sass skill counter
  var sass = document.getElementById("sass");
  const [sscounter, setsscounter] = useState(0);
  useInterval(() => {
    if (sscounter < 85 && window.scrollY >= 200) {
      setsscounter(sscounter + 1);
      sass.style.animation = "progresSS 1.2s linear";
    }
  }, 8);

  // react skill counter
  var react = document.getElementById("react");
  const [rcounter, setrcounter] = useState(0);
  useInterval(() => {
    if (rcounter < 70 && window.scrollY >= 200) {
      setrcounter(rcounter + 1);
      react.style.animation = "progresR 1.2s linear";
    }
  }, 10);

  // bootstrap skill counter
  var bootstrap = document.getElementById("bootstrap");
  const [bcounter, setbcounter] = useState(0);
  useInterval(() => {
    if (bcounter < 85 && window.scrollY >= 200) {
      setbcounter(bcounter + 1);
      bootstrap.style.animation = "progresB 1.2s linear";
    }
  }, 10);

  return (
    <div id="skills" className="p-4 secBackground text-light" >
      <div className="h1 fitContent  title">SKILLS</div>
      <div className="row">
        {/* html progress */}
        <div className="col-md-4 col-sm-6  text-center progressHover">
          <div className="h2 text-center">HTML</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{hcounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="h" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

        {/* css progress */}
        <div className="col-md-4 col-sm-6 text-center progressHover">
          <div className="h2 text-center">CSS</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{ccounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="c" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

        {/* js progress */}
        <div className="col-md-4 col-sm-6 text-center progressHover">
          <div className="h2 text-center">JS</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{jcounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="js" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

        {/* sass progress */}
        <div className="col-md-4 col-sm-6 text-center progressHover">
          <div className="h2 text-center">SASS</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{sscounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="sass" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

        {/* react progress */}
        <div className="col-md-4 col-sm-6 text-center progressHover">
          <div className="h2 text-center">REACT JS</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{rcounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="react" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

      {/* bootstrap progress */}
      <div className="col-md-4 col-sm-6 text-center progressHover">
          <div className="h2 text-center">BOOTSTRAP</div>
          <div className="outer d-flex justify-content-center align-items-center">
            <div className="inside d-flex justify-content-center align-items-center">
              <div className="fw-bold progressNum">{bcounter}%</div>
            </div>
          </div>
          <svg
            className="fitContent"
            style={{ height: "200px", width: "200px", marginTop: "-228px" }}
          >
            <circle id="bootstrap" r="88" cx="50%" cy="50%" />
          </svg>
        </div>

      </div>
    </div>
  );
}

export default Skills;
