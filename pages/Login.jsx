import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loginform from "../src/components/Loginform";
import Register from "../src/components/Register";



export default function Login({ setUser }) {


  const [isLogin, setIsLogin] = useState(true);


  return (
    <>

      <div className=" flex flex-col-reverse md:flex-row  justify-center  h-screen gap-0 md:mx-60 mx-10 my-10 md:my-0  ">

        <div className="w-full md:w-1/2 flex justify-center items-center my-20">
          {isLogin ? <Loginform setUser={setUser} setIsLogin={setIsLogin} /> : <Register setUser={setUser} setIsLogin={setIsLogin} />}

        </div>



        {/* image */}

        <div className="w-full md:w-1/2 flex justify-center items-center md:p-0 " >


          <img src="laptop.png" alt="auth" className=" object-cover shadow-lg float" />


        </div>


      </div>














    </>
  )
}
