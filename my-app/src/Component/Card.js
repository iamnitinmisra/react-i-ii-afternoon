import React, { Component } from 'react'
import "./Card.css"

export default class Card extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return(
            <div className="Card-parent">
                {this.props.parentData.name.first}
            </div>
        )
    }
}