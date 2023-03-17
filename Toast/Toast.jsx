import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const  Toast = () => {

  let handleSubmit=()=>{
    toast.success("LOGGED IN SUCCESSFULLY",
    {position:toast.POSITION.TOP_RIGHT})
  }
  let handleSubmitChange=()=>{
    toast.warning("Wrong credentials")
  }
  return (
    <div className='mainBlock'>
       <ToastContainer/>
      <button onClick={handleSubmit}>CLICK FOR MESSAGE</button>
      <button onClick={handleSubmitChange}> Submit </button>
    </div>
  )
}

export default Toast
