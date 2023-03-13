import React, { Component } from 'react'

class States extends Component {
  constructor(){
    super()
    this.state={username:"Arun",
                hobbies:["Cricket","Music","Kabaddi"]}
  }

  render() {
    return (
      <div><h1 style={{fontSize:"80px", color:"green"}}>{this.state.username}</h1>
          <ol> <h3 style={{fontFamily:"monospace" , color:"chocolate"}} > {this.state.hobbies.map((data)=>{
                // return <li key={data.toString()}>{data}</li>
                return <li>{data}</li>
            })}
            </h3>
            </ol> 
      </div>
    )
  }
}
export default States
