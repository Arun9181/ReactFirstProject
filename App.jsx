import React,{Component} from "react";
import StudentDetails from './StudentDetails';
import JSON from "./studentdata.json"


class App extends Component{
 constructor()
 {
  super()
  this.state={json:JSON}
 }
 render(){
  return(
    <StudentDetails data={this.state.json}/>
  )
 }

}
export default App