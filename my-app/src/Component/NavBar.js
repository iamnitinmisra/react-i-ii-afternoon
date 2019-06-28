import React, { Component } from "react";

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {

    };
  }
  render() {
      console.log(this.props)
    return (
        <div>
           <button onClick = {() => this.props.goBackwardFn()}>Go Back</button>
           <button onClick = {() => this.props.goForwardFn()}>Go Forward</button>
        </div>
    );
  }
}
