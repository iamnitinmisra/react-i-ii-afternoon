import React, { Component } from 'react';
import data from "./data"
import './App.css';
import Card from './Component/Card'
import NavBar from "./Component/NavBar"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data,
      index: 0
    }

    this.goForward = this.goForward.bind(this)
    this.goBackward = this.goBackward.bind(this)


  }
  goForward(){
    let {index, data} = this.state // destructure 
    if(data[index+1]){
       this.setState({
      index:this.state.index += 1
    })
    }
    else{
      console.log("You've reached the end of the Array")
      this.setState({
        index: 0
      })
    }
   
  }

  goBackward(){
    let {index, data} = this.state
    if(data[index-1]){
    this.setState({
      index:this.state.index -= 1
    })
  }
  else{
    console.log("You're at the beginning of the Array")
    this.setState({
      index: 24
    })
  }
  }
  
  render(){
    console.log(this.state.data)
    return(
      <div className="App">
        hi
        <Card parentData = {this.state.data[this.state.index]}/> 
        <NavBar goForwardFn = {this.goForward}
        goBackwardFn = {this.goBackward}
        />
      </div>
    )
  }
}

export default App;
