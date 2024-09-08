import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Event />} />
            <Route path="/register/:id" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
