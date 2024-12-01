import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import TaskManagemnetDashboard from "./pages/TaskManagemnetDashboard.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for LandingPage, SignUpPage, and Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admindashboard" element={<Dashboard />} />

        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/taskmanagement"
          element={<TaskManagemnetDashboard />}
        ></Route>
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
