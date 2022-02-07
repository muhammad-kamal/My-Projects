import React, { useEffect, useState } from "react";
import "./_scrollBtn.css";

function ScrollBtn() {
  const [toggleV, settoggleV] = useState(false);

  const toggle = () => {
    if (window.scrollY >= 200) {
      settoggleV(true);
    } else {
      settoggleV(false);
    }
  };


  const scrollTop = () =>{
      window.scrollTo({
          top : 0,
          behavior : "smooth"
      })
  }

  window.addEventListener("scroll",toggle)

  return (
    <div>
      <button style={{display : toggleV ? "block" : "none"}} onClick={scrollTop} className="upBtn">UP</button>
    </div>
  );
}

export default ScrollBtn;
