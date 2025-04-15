import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 cursor-pointer
            loading "
        >
          Signin
        </button>
      </form>
      <div className="flex gap-3">
        <p>Have an Account?</p>
        <Link to="/sign-up" className="text-blue-500">
          <span className="text-blue-500">Signup</span>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
