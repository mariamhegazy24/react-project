import React from 'react'
import { Link } from "react-router-dom"


import AuthButton from './AuthButton'
export default function Navbar(props) {
  return (



    <>
    
   
   <div className="navbar bg-base-100 shadow-sm" style={{ backgroundColor: "rgb(26, 26, 26)" }}>
  <div className="navbar-start">

    <a ><img src="logo1.png" className="w-30"></img></a>
    
  </div>


  <div className="navbar-center hidden lg:flex text-white ">
    <ul
        tabIndex={0}
        className="menu menu-horizontal px-1 ">
         <li className="active hover:bg-black rounded-full  "><Link to="/home">Homepage</Link></li>
        <li className="active hover:bg-black rounded-full  "><a>News</a></li>
        <li className="active hover:bg-black rounded-full  "><a>Podcasts</a></li>
        <li className="active hover:bg-black rounded-full  "><a>Resources</a></li>
      </ul>
  </div>


  <div className="navbar-end">
    <AuthButton user={props.user} />
  </div>
</div>
    
    </>
  )
}
