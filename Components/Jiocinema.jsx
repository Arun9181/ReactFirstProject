import React from "react";
import STYLE from "./jiocinema.module.css"

const Jiocinema=()=>{
    return(
        <div className={STYLE.navBlock}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png" alt="" />
            <h1>JioCinema</h1>
            <ul>
                <li><a href="HOME">HOME</a></li>
                <li><a href="SPORTS">SPORTS</a></li>
                <li><a href="MOVIES">MOVIES</a></li>
                <li><a href="TVSHOWS">TVSHOWS</a></li>

            </ul>
            <input type="text" name="" id={STYLE.input} placeholder="Search" />
        </div>
        
    )
}
export default Jiocinema;