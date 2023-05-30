import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mynavbar from "./navbar/Mynavbar";
import Loginpage from "./components/Loginpage";
import Registerform from "./components/Registerform";
import Home from "./components/Home";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Mynavbar />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/register" element={<Registerform />} /> */}
        </Routes>
      </Router>
    </>
  );
}
