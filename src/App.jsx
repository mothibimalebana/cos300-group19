import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import AuthRoute from "./components/AuthRoute";
import Dashboard from "./Dashboard";
import PasswordReset from "./PasswordReset";
import LandingPage from "./LandingPage";

const App = () =>{
  return(
    <>
        <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/passwordreset" element={<PasswordReset />} />

      </Routes>
    </>
  )
}

export default App