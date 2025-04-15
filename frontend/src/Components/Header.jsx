import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-4 bg-blue-400">
      {/* Logo Text */}
      <div>
        <h1 className="text-3xl font-bold">MERN-Auth</h1>
      </div>
      {/* Navelink */}
      <div className="flex gap-4 text-lg font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
