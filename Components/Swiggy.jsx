import React from "react";
import STYLE from "./swiggy.module.css"

const Swiggy=()=>{
    return(
        <div className={STYLE.navBlock}>
            <img src="https://w7.pngwing.com/pngs/587/646/png-transparent-swiggy-hd-logo.png" alt="logo" />
            <ul>
                <li><a href="Login">Login</a></li>
                <li><a href="Sign up">Sign up</a></li>
                <li><a href="Location">Location</a></li>
                <li><a href="Track">Track</a></li>
        

            </ul>
        </div>
    )
}
export default Swiggy;