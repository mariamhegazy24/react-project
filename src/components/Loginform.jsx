import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Loginform({ setUser, setIsLogin }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", { email, password })
      .then(res => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      })
      .catch(err => alert("Email or password incorrect"));
  };



  return (
    <>
      {/* form */}
      <div className="flex flex-col items-center shadow-lg rounded-2xl p-8 w-[400px] " style={{ backgroundColor: "rgb(25, 25, 25)" }}>

        <div className='flex justify-center items-center'>
          <img src='logo2.png' className='w-10 h-10 object-contain slow-spin'></img>
          <h1 className="text-4xl font-bold mb-2 text-white">Login</h1>

        </div>
        <p className="mb-6 text-amber-50"  >Login to access your account</p>

        <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit} >
          {/* username */}
          <label className="input validator flex items-center gap-4 w-full">
            <svg
              className="h-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="email"
              required
              placeholder="Email"

              className="flex-1 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p className="validator-hint text-xs text-gray-500">
            Enter valid email address
          </p>

          {/* password */}
          <label className="input validator flex items-center gap-4 w-full">
            <svg
              className="h-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength={5}
              className="flex-1 outline-none "
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="validator-hint  text-xs text-gray-500">
            Must be more than 8 characters, including at least one number, one lowercase
            letter, and one uppercase letter
          </p>

          {/* button */}
          <button
            type="submit"
            className="btn my-3 w-full py-2 rounded-lg border-0 mx-auto"
            style={{ backgroundColor: "rgb(255, 209, 25)" }}
          >
            Login
          </button>
        </form>

        <p className="text-sm text-amber-50">
          Don't have an account?{" "}
          <span className="text-white cursor-pointer" onClick={() => setIsLogin(false)} style={{ color: "rgb(255, 209, 25)" }}>   Sign up</span>
        </p>
      </div>




    </>
  )
}
