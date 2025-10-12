import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Add(props) {


  const navigate = useNavigate();
  const location = useLocation();
  const existingPost = location.state?.post;
  console.log("existingPost:", existingPost);




  const [title, setTitle] = useState(existingPost?.title || "");
  const [description, setDescription] = useState(existingPost?.description || "");
  const [author, setAuthor] = useState(existingPost?.author || "");
  const [imageFile, setImageFile] = useState(existingPost?.imageFile || "");



  //handle add new post 

  const Addnew = async (e) => {
    e.preventDefault();
    const imgURL = await handleUpload();
    const newPost = {
      title,
      description,
      author: props.user?.name,
      authorimg: props.user?.imgURL,
      image: imgURL,
      isNew: true
    };

    axios.post("http://localhost:5000/posts", { id: Date.now(), ...newPost })
      .then(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Post added successfully"
        });
        navigate("/");
        props.setPosts(prev => [res.data, ...prev]);

      })
      .catch(err => console.error(err));
  };





  console.log("existingPost:", existingPost);
  console.log("existingPost.id:", existingPost?.id);



  const handleEdit = async (e) => {
    e.preventDefault();

    const imgURL = await handleUpload();
    const updatedPost = {
      title,
      description,
      author: props.user?.name,
      authorimg: "pic10.jpg",
      image: imgURL || image,
      isNew: false
    };

    axios.patch(`http://localhost:5000/posts/${existingPost.id}`, updatedPost)
      .then(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Post updated successfully"
        });
        const updated = res.data;
        props.setPosts(prev => prev.map(post => post.id === updated.id ? updated : post));
        navigate("/");
      })
      .catch(err => console.error(err));
  };



  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch("https://api.imgbb.com/1/upload?key=cbdb33be92e0ff7feda1fda765b65bde", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Direct image URL:", data.data.url);
    return data.data.url;
  };



  return (

    <>


      <div className=" flex flex-col-reverse md:flex-row  justify-center  gap-4 mx-10 md:my-10 "
      >



        <div className=" md:w-[500px] p-6 h-auto  shadow rounded-lg text-white md:ml-40 mx-auto md:py-10 md:my-10 " style={{ backgroundColor: "rgb(25, 25, 25)" }}>


          <div className='flex justify-center items-center'>
            <img src='logo2.png' className='w-20 h-20 object-contain slow-spin'></img>
            <h1 className="text-4xl font-bold mb-2 text-white">{existingPost ? "Edit post" : "Add new post"}</h1>

          </div>


          <form className="flex flex-col gap-4 mx-5" onSubmit={existingPost ? handleEdit : Addnew}>

            {/* title */}
            <label htmlFor="title" className="font-medium">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              className="border p-2 rounded"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            {/* description */}
            <label htmlFor="description" className="font-medium ">Description</label>
            <textarea
              id="description"
              placeholder="Description"
              className="border p-2 rounded  focus:h-40 h-20 transition-all duration-300"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />


            {/* image */}
            <label htmlFor="image" className="font-medium">Image URL</label>


            <div className="flex flex-col items-center justify-center w-full p-6 border-2  border-gray-600 rounded-lg cursor-pointer hover:border-black-500 ">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImageFile(e.target.files[0])}
                id="imageUpload"

              />


              <label htmlFor="imageUpload" className="flex flex-col items-center cursor-pointer">
                {imageFile ? (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="profile preview"
                    className=" object-cover"

                  />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    <span className="text-gray-500">Click to upload an image</span>

                  </>


                )}
              </label>



            </div>


            <div className='mx-2'>

              {existingPost ? <button type="submit" className="bg-green-500  text-balck  my-4 w-full py-2 rounded-lg border-0  hover:bg-green-600 cursor-pointer hover:scale-105">
                Edit post
              </button> : <button type="submit" className=" text-black  my-4 w-full py-2 rounded-lg border-0 hover: scale-105 cursor-pointer hover:scale-110 hover:bg-[rgb(231,190,22)] bg-[rgb(255,209,25)] "
              >
                Add post
              </button>}


            </div>

          </form>
        </div>


        {/* image */}

        <figure className="w-full md:w-1/2 h-[600px] overflow-hidden rounded-lg " >



          <img src="addpost.png" alt="auth" className=" float w-full h-full object-cover md:object-right object-center" />


        </figure>

      </div>

    </>
  );
}






