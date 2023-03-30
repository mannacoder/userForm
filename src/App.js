import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./screens/register";
import LandingScreen from "./screens/landingScreen";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";
import PrivateRoute from "./utils/PrivateRoute";

// import AppStyles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingScreen />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
