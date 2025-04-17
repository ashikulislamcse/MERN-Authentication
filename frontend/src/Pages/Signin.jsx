import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { navigate, axios } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.get(
        "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <ToastContainer position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 cursor-pointer
            loading "
        >
          {loading ? "Login in..." : "Login"}
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
