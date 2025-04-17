import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../../context/appContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { navigate, axios } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "/api/user/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>

      {/* ✅ ToastContainer properly placed */}
      <ToastContainer position="top-center" autoClose={3000} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your Name"
          id="name"
          className="bg-slate-100 p-3 rounded-lg"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>

      <div className="flex gap-2 mt-4">
        <p>Have an Account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default Signup;
