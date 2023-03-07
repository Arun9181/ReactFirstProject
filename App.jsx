import React from  "react"
 import Jiocinema from './Components/Jiocinema';
import Netflix from './Netflix/Netflix';
import Linkedin from "./Components/Linkedin";
import Hotstar from "./Components/Hotstar"
// import Kea from './Components/Kea';



const App=()=>{
    return(
<div>
 <Jiocinema/>
 <br />
 <Netflix/>
 <br />
 <Linkedin/>
 <br />
 <Hotstar/>
 <br />
 {/* <Kea/> */}
 
 </div>
 )
}
export default App;
