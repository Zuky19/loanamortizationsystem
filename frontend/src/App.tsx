import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
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
