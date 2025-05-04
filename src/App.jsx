import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import AuthRoute from "./components/AuthRoute";
import Dashboard from "./Dashboard";

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
      </Routes>
    </>
  )
}

export default App