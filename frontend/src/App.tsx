import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for LandingPage and Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

// Use ReactDOM to render the App component
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

export default App;
