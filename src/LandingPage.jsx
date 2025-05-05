import React from "react";
import { useAuth } from "./context/AuthProvider";
import '../src/css/LandingPage.css'
import Nav from "./components/Nav";

const LandingPage = () => {
  const { user } = useAuth();

  return(
    <>
      <div className="landing-container">
        <Nav/>
        <div className="content grid grid-cols-2 grid-rows-2 flex-col">
          <h6 className="title md:text-7xl 2xl:text-8xl">Growing Beyond Expectation</h6>
          <div className="goto flex row-start-2">
          <button>Dashboard</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M13 5.5L20 12.5L13 19.5M20 12.5H4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className="branding cols-start-2 row-start-2">
            <h5 className="brand">Find us!</h5>
            <p className="text">
              PT. BORNEO OLAH SARANA SUKSES, Tbk
              Wisma 77 Building, Tower 1, 8th Floor,
              Letjen S Parman#77
              West Jakarta 11410, Polokwane
            </p>
            <div className="contacts flex gap-5">
              <p>+72 512 0082</p>
              <p>+71 334 6084</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;