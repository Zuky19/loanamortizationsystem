import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "../src/components/ProtectedRoute.tsx";
import TaskManagemnetDashboard from "./pages/TaskManagemnetDashboard.tsx";
import AdminDashboard from "./pages/AdminDasboard.tsx";
import YearlyBreakdown from "./pages/YearlyBreakdown.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for LandingPage, SignUpPage, and Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/yearly" element={<YearlyBreakdown />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/taskmanagement"
          element={<TaskManagemnetDashboard />}
        ></Route>
        <Route
          path="/dashboard"
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
