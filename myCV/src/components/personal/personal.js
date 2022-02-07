import React from "react";
import PersonalNav from "./personalNav";
import Education from "./education";
import Hobbies from "./hobbies";
import More from "./More";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Personal() {
  return (
    <BrowserRouter>
      <div id="personal" className="secBackground">
        <div className="h1 fitContent  title personalTitle">PERSONAL INFO</div>
        <PersonalNav />
        <Routes>
          <Route path="/" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Personal;
