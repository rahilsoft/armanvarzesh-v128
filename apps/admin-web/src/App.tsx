import UIDemo from './pages/UIDemo'
import ThemeToggle from './components/ThemeToggle'

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import DashboardPage from "@pages/DashboardPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
