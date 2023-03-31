import React, { useState } from 'react'               //Create operation
import axiosInstance from '../helpers/axiosInstance'

const CreatePost = () => {
    let[coursename,setCoursename]=useState("")
    let[authorname,setAuthorname]=useState("")
    
    let handleSubmit= async (e)=>{
        e.preventDefault()
        
        try {
            let payload={
                coursename,
                authorname
            }
            let data=await axiosInstance.post("/posts",payload)
            
        } catch  {
            console.log("UNABLE TO CONNECT TO SERVER");
            
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="CourseName">CourseName</label>
            <input type="text" id='CourseName' onChange={(e)=>{
                setCoursename(e.target.value)
            }} /> <br />
            <label htmlFor="AuthorName">AuthorName</label>
            <input type="text" id='AuthorName' onChange={(e)=>{
                setAuthorname(e.target.value)
            }} /> <br />
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default CreatePost