import React, { Component } from 'react'

export default class NsEvent extends Component {
    constructor()
    {
        super()
        this.state={
            username:"Upendra",
            PersonName:""
        }
    }
    componentDidMount()    //it is one of the life cycle method
    {
        let btn=document.querySelector('button') 
          btn.addEventListener('click',()=>{
            this.setState({username:this.state.username="KGF"})
          }) 
          let input=document.querySelector('input')
          input.addEventListener('keypress',(e)=>{
            this.setState({PersonName:e.target.value})
          })
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button>CHANGE</button>
        <h2>{this.state.PersonName}</h2>
        <input type="text" placeholder='Enter the name'/>
      </div>
    )
  }
}
