import React, { useEffect, useState } from 'react'               //Read operation
import axiosInstance from '../helpers/axiosInstance';

const ViewPost = () => {
    let[data,setData]=useState([])

    useEffect(()=>{
        let fetchData=async ()=>{
            let {data}=await axiosInstance.get('/posts')
            setData(data)
        }
        fetchData()
    },[])

  return (
    <div style={{display:"flex" , flexDirection:"row" ,flexWrap:"wrap"}}>
        {data.map((x)=>{
            return (
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid black", }}>
                 <h1>{x.coursename}</h1>
                <h2>{x.authorname}</h2>
                </div>
            )
        })}

    </div>
  )
}

export default ViewPost