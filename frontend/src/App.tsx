
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";  
import Dashboard from "./pages/AdminDasboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for LandingPage, SignUpPage, and Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/admindashboard" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
};

// Use ReactDOM to render the App component
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

export default App;
