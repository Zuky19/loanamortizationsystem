import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
