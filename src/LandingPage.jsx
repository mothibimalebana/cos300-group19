import React from "react";
import { useAuth } from "./context/AuthProvider";
import '../src/css/LandingPage.css'

const LandingPage = () => {
  const { user } = useAuth();

  return(
    <>
      <div className="container">

      </div>
    </>
  )
};

export default LandingPage;