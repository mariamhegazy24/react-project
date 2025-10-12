import React from 'react'
import { Link } from "react-router-dom"

import AuthButton from './AuthButton'
import Logout from './Logout'

export default function Navbar(props) {
  return (



    <>

      <div className="navbar bg-base-100 shadow-sm" style={{ backgroundColor: "rgb(26, 26, 26)" }}>
        {/* Start (logo + menu button for mobile) */}
        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

           
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded-box w-52"
            >
              <li><Link to="/home">Homepage</Link></li>
              <li><a>News</a></li>
              <li><a>Podcasts</a></li>
              <li><a>Resources</a></li>
            </ul>
          </div>

          {/* logo */}
          <a><img src="logo1.png" alt="Logo" className="w-30" /></a>
        </div>


        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">
            <li className="active hover:bg-black rounded-full"><Link to="/home">Homepage</Link></li>
            <li className="active hover:bg-black rounded-full"><a>News</a></li>
            <li className="active hover:bg-black rounded-full"><a>Podcasts</a></li>
            <li className="active hover:bg-black rounded-full"><a>Resources</a></li>
          </ul>
        </div>

        {/* End (auth & logout buttons) */}
        <div className="navbar-end flex gap-2">
          <AuthButton user={props.user} />
          <Logout user={props.user} setUser={props.setUser} />
        </div>
      </div>


    </>
  )
}
