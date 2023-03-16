import React,{useState} from "react"
import { faker } from '@faker-js/faker';
import STYLE from "./app.module.css"

const CounterApp=()=>{
  const [count,setCount]=useState(0)
  const[avatar,setAvatar]=useState(faker.image.avatar())
  


  let handleIncrement=()=>{
    setCount(count+1)
  }
  let handleDecrement=()=>{
    setCount(count-1)
  }
  let handleReset=()=>{
    setCount(0)
  }
let handleChangeAvatar=()=>{
  setAvatar(faker.image.avatar())
}
  return(
    <div className={STYLE.mainBlock}>
    <h1>{count}</h1>
    <img src={avatar} alt="" />
    <button onClick={handleIncrement}>+ INCREMENT</button>
    <button onClick={handleDecrement}>- DECREMENT</button>
    <button onClick={handleReset}>RESET</button>
    <button onClick={handleChangeAvatar}>Change Avatar</button>
    </div>
  )
}
export default CounterApp;