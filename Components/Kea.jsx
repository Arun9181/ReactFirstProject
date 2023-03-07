import React from "react";
import STYLE from "./kea.modules.css"
const Kea=()=>{
    return(
        <div className={STYLE.nav}>
          
             <ul>
             <img src="https://www.crustindia.com/wp-content/uploads/2019/06/KEA-Logo.png" alt="" />
             <li><a href="HOME">HOME</a></li>
             <li><a href="ADMISSIONS">ADMISSIONS</a></li>
             <li><a href="RECRUITMENTS">RECRUITMENTS</a></li>
             <li><a href="PORTAL">COLLEGE PORTAL</a></li>
             <li><a href="FEES">FEES</a></li>
             <li><a href="CONTACT">CONTACT US</a></li>
             
             <input type="text" placeholder="English" />
             </ul>
             </div>
        
    )
}
export default Kea;