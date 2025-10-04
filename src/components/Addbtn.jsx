import React from 'react'

export default function Addbtn(props) {
  return (
    <button className=" fixed bottom-6 right-6 w-16 h-16 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-105 transform transition-transform cursor-pointer "
     onClick={props.onClick}
      style={{backgroundColor: "rgb(255, 209, 25)"}}
     
     > 
     + </button>
  )
}
