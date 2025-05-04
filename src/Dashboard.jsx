import React from "react";
import { useAuth } from "./context/AuthProvider";
import '../src/css/Dashboard.css'


const Dashboard = () => {
  const { user } = useAuth();

  return(
    <>
    </>
  )
};

export default Dashboard;