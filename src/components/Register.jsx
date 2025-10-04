
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register({ setUser, setIsLogin }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileFile, setProfileFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgURL = profileFile ? await handleUpload() : null;

    axios.post("http://localhost:5000/register", { email, password, name, imgURL })
      .then(res => {
        console.log("Register response:", res.data);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      })
      .catch(err => {
        console.error("Register error:", err.response || err);
        alert("Email or password incorrect");
      });
  };



  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", profileFile);

    const res = await fetch("https://api.imgbb.com/1/upload?expiration=600&key=baa079b2d44d65cc0f763082cd2e9c1b", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Direct image URL:", data.data.url);
    return data.data.url;
  };






  return (
    <div className="flex flex-col items-center shadow-lg rounded-2xl p-8 w-[400px] text-white " style={{ backgroundColor: "rgb(25, 25, 25)" }}>
      <div className='flex justify-center items-center'>
        <img src='logo2.png' className='w-10 h-10 object-contain slow-spin'></img>
        <h1 className="text-4xl font-bold mb-2 text-white">Register</h1>

      </div>
      <p className="mb-6 text-white opacity-70">Create a new account</p>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit} >


        <div className="flex flex-col items-center">
          {/* Avatar upload */}
          <div className="relative">

            <div className="w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center overflow-hidden ">
              {profileFile ? (
                <img
                  src={URL.createObjectURL(profileFile)}
                  alt="profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0v.75H4.5v-.75z"
                  />
                </svg>
              )}
            </div>


            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow hover:scale-105 transition"
            >
              +
            </label>
          </div>

          {/* real input hidden */}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setProfileFile(e.target.files[0])}
          />
        </div>







        {/* name */}

          <label className="text-sm font-medium text-white mx-2">Full name</label>
        <div >
          <input
            type="text"
            required
            placeholder="full name"
            className="input validator text-black border-gray-500 w-full"
             minLength={3} 
             maxLength={30} title="Only letters, numbers or dash"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="validator-hint hidden">
            Must be 3 to 30 characters
            <br />containing only letters, numbers or dash
          </p>
        </div>

        {/* Email */}
          <label className="text-sm font-medium text-white">Email</label>
        <div >
          <input
            type="email"
            required
            placeholder="mail@site.com"
            className="input validator text-black border-gray-500 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>

        {/* Password */}
          <label className="text-sm font-medium text-white">Password</label>
        <div >
          <input
            type="password"
            required
            placeholder="Enter your password"
            minLength={5}
            className="input validator text-black border-gray-500 w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number
            <br />At least one lowercase letter
            <br />At least one uppercase letter
          </p>
        </div>



        <button
          type="submit"
          className="btn btn-secondary my-4 w-full py-2 rounded-lg border-0 text-black"
          style={{ backgroundColor: "rgb(255, 209, 25)" }}
        >
          Register
        </button>
      </form>

      <p className="text-sm text-white opacity-70 mt-2">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)} style={{ color: "rgb(255, 209, 25)" }}>
          Login
        </span>
      </p>
    </div>
  );
}

