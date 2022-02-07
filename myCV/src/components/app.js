import React, { useEffect , useState } from "react";
import Head from "./headComp/head"
import Skills from "./skills/skills"
import Personal from "./personal/personal";
import Contact from "./contact/contact";
import ScrollBtn from "./scrollButton/scrollBtn";




function App() {
    return(
        <div>
            <Head />
            <ScrollBtn />
            <Skills />
            <Personal />
            <Contact />
        </div>
    )
}

export default App;