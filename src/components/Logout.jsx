import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout({ user, setUser }) {

  const handleLogOut = () => {

    if (user) {

      Swal.fire({
        title: "Log Out",
        text: "Are you sure you want to log out?",
        icon: "warning",
        confirmButtonText: "Yes, log me out",
        cancelButtonText: "Cancel",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#f1c40f",
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setUser(null);
          console.log("User logged out");
          Swal.fire({
            title: "Logged Out!",
            text: "You have been logged out successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })

    }

  }

  return (<>


    {user &&
      <button className="cursor-pointer mx-4" onClick={handleLogOut}><svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "white", transform: "scaleX(-1)" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
      </svg>
      </button>

    }


  </>
  )
}
