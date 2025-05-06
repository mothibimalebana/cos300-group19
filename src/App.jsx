import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import AuthRoute from "./components/AuthRoute";
import Dashboard from "./Dashboard";
import PasswordReset from "./PasswordReset";
import LandingPage from "./LandingPage";
import UpdatePassword from "./UpdatePassword";
import Projects from "./Project";
import NavLayout from "./layout/NavLayout";

const App = () =>{
  return(
    <>
      <Routes>
            {/* Routes with the navbar */}
            <Route element={<NavLayout/>}>
              <Route element={<AuthRoute />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/projects" element={<Projects />} />
              </Route>
            </Route>
            
            {/* Routes without the navbar */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </>
  )
}

export default App