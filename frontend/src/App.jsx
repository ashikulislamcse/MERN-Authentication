import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
