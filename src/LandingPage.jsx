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
      </div>
    </>
  )
};

export default LandingPage;