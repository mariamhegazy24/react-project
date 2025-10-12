
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "../pages/Home"
import axios from "axios";
import Login from "../pages/Login";
import Add from "../pages/Add";


function App() {

const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);




  return (
    <>

  <Navbar user={user} setUser= {setUser}/>
  <Routes>
   <Route 
    path="/" 
    element={<Home posts={posts}  user={user} setPosts={setPosts}/>} 
  />
  <Route 
    path="/home" 
    element={<Home posts={posts}  user={user}  setPosts={setPosts}/>} 
  />
       <Route
       
       path="/login"
       element= {<Login   setUser={setUser}    />}
      
       />


       <Route path="/addpost" element={ <Add user={user} setPosts={setPosts}/> }/>
       
      </Routes>

    </>
  )
}

export default App
