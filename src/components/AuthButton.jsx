import React from 'react'
import { useNavigate } from "react-router-dom";

export default function AuthButton({user}) {

  const navigate = useNavigate();

  
if (user){
return (
 <div className="flex items-center gap-2">
      <img
        src={user.imgURL}  
        alt="Author"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-lg font-medium text-white mx-5">Hi, {user.name}</span>
    </div>


);

}
  return (
    <>
      
        <button
          onClick={() => navigate("/login")}
          className="btn border-0 "
          style={{ backgroundColor : "rgb(255, 209, 25)"}}
        >
          Login / Register
        </button>
      
    
    
    
    </>
  )
}
