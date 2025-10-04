import React, { useState } from 'react'
import AuthButton from '../src/components/AuthButton'
import Addbtn from '../src/components/Addbtn'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useRef } from 'react';
import { useEffect } from 'react';



export default function Home(props) {



  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios.delete(`http://localhost:5000/posts/${id}`)
        .then(() => {
          props.setPosts(prev => prev.filter(post => post.id !== id));
        })
        .catch(err => console.error(err));
    }
  };


  return (
    <>


      <div className=" text-white">

        {/* hero section [header and logo ] */}

        <div className='mx-20 my-10 flex flex-col text-white'>



          <div className="flex items-center justify-center gap-12 px-10 py-10 my-5" >
            <img className="w-72 h-72 object-contain rounded-lg slow-spin" src='logo2.png'></img>


            <div className="flex flex-col items-start justify-center text-left max-w-2xl"


            >
              <p className="text-gray-600 text-lg mb-4">
                Your Journey to Tomorrow Begins Here
              </p>

              <h1 className="text-4xl font-bold mb-6 text-white leading-snug max-w-3xl">
                Explore the Frontiers of Artificial Intelligence
              </h1>

              <p className="text-gray-500 text-lg max-w-2xl">
                Welcome to the epicenter of AI innovation. FutureTech AI News is your
                passport to a world where machines think, learn, and reshape the future.
                Join us on this visionary expedition into the heart of AI.
              </p>
            </div>

          </div>

          {/* second div contains 3 divs in bottom  */}
          <div className="border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {/* firt div  */}
            <div className="p-6 text-white flex justify-between">
              <div>
                <img src='div2.png' className='w-20'></img>
                <h2 className="text-xl font-bold mb-2">Latest News Updates</h2>
                <p className="text-gray-400">
                  Stay Current
                </p>
                <p className="text-gray-400">
                  Over 1,000 articles published monthly
                </p>

              </div>
              <button className="  w-10 h-10 mt-20 rounded-full text-black shadow-lg flex items-center justify-center text-2xl hover:scale-105 transform transition-transform cursor-pointer "

                style={{ backgroundColor: "rgb(255, 209, 25)" }}

              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>

            {/* second div */}
            <div className="p-6  text-white flex justify-between">
              <div>

                <img src='div3.png' className='w-20'></img>
                <h2 className="text-xl font-bold mb-2">Research</h2>
                <p className="text-gray-400">
                  Stay updated with cutting-edge research papers and trends.
                </p>

              </div>

              <button className="  w-10 h-10 mt-20 rounded-full text-black shadow-lg flex items-center justify-center text-2xl hover:scale-105 transform transition-transform cursor-pointer "

                style={{ backgroundColor: "rgb(255, 209, 25)" }}

              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>

            {/* third div */}
            <div className="p-6  text-white flex justify-between">
              <div>
                <img src='div4.png' className='w-20'></img>
                <h2 className="text-xl font-bold mb-2">Community</h2>
                <p className="text-gray-400">
                  Join a network of AI enthusiasts shaping the future.
                </p>

              </div>

              <button className="  w-10 h-10 mt-20 rounded-full text-black shadow-lg flex items-center justify-center text-2xl hover:scale-105 transform transition-transform cursor-pointer "

                style={{ backgroundColor: "rgb(255, 209, 25)" }}

              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>


        {/* div contains title div and posts  */}
        <div>


          <div className="flex items-center justify-between gap-12 px-20 py-10 my-5 flex-col md:flex-row" style={{ backgroundColor: "rgb(25, 25, 25)" }}>



            <div className="flex flex-col items-start text-left max-w-2xl"


            >
              <p className="text-white text-lg mb-4 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgb(51, 51, 51)" }}>
                A Knowledge Treasure Trove
              </p>

              <h1 className="text-4xl  mb-6 text-white leading-snug ">
                Explore FutureTech's In-Depth Blog Posts
              </h1>


            </div>

            {/* button view all posts */}


            <button
              className="flex items-center justify-center gap-2 
             text-amber-50  px-5 py-3  
             rounded-lg border border-gray-600 
             transition duration-300 hover:border-gray-400"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              View All Blogs
              <span className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </button>

          </div>


          {/* posts content */}

          <div className='md:mx-20 md:my-10 mx-5 my-5 flex flex-col text-white'>

            {props.posts.sort((a, b) => b.id - a.id)?.map(post => (



              <div className="card  border border-gray-500 border-opacity-20  bg-base-100 shadow-sm my-5 transform transition-transform duration-500 ease-out hover:scale-105 flex flex-col md:flex-row md:h-100 lg:h-80"
                key={post.id} style={{ backgroundColor: "rgb(25, 25, 25)" }}>

                <figure className='w-full md:w-1/3 h-60 md:h-auto'>
                  <img
                    src={post.image}
                    alt="postimg"
                    className='w-full h-full object-cover'

                  />

                </figure>


                <div className="card-body flex-1 h-full flex flex-col justify-between">
                  <h2 className="card-title text-2xl mb-4 font-bold mt-4">{post.title}</h2>
                  <p className=" text-lg ">{post.description}</p>



                  {/* card actions  */}
                  <div className="card-actions flex items-center gap-2">
                    <img
                      src={post.authorimg}
                      alt="Author"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="font-medium text-lg">{post.author}</p>



                    <div className='ml-auto flex gap-3'>


                      <button
                        className="flex items-center justify-center gap-2 
             text-amber-50 text-lg px-5 py-3 w-40 
             rounded-lg border border-gray-600 
             transition duration-300 hover:border-gray-400
             ml-auto"
                        style={{ backgroundColor: "rgb(20, 20, 20)" }}
                      >
                        View Blog
                        <span className="text-yellow-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </span>
                      </button>


                      {/* div contains edit and delete btns */}

                      {props.user && props.user.name === post.author && <button


                        className="flex items-center justify-center gap-2 
             text-black text-lg px-5 py-3 bg-[rgb(255,209,25)]
             rounded-lg border border-gray-600 
             transition duration-300 hover:bg-transparent cursor-pointer hover:text-white hover:border-[rgb(255,209,25)] " onClick={() => navigate("/addpost", { state: { post } })}>
                        Edit
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </button>}




                      {props.user && props.user.name === post.author && <button className="flex items-center justify-center gap-2 
             text-white text-lg px-5 py-3 bg-transparent
             rounded-lg border border-gray-600
             transition duration-300  cursor-pointer hover:border-red-900 hover:text-red-500"



                        onClick={() => handleDelete(post.id)}>
                        Delete
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                      </button>}






                    </div>


                  </div>

                </div>




              </div>


            ))

            }

          </div>



        </div>

      </div>



      {props.user &&
        <Addbtn user={props.user} onClick={() => navigate("/addpost")} />
      }

    </>
  )
}









