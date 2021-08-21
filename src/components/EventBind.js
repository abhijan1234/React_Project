import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello"
        }
        this.clickHandle=this.clickHandle.bind(this)
    }
    
    clickHandle(){
        this.setState({
            message : "GoodBye"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                { /* <button onClick={this.clickHandle.bind(this)}>Click Me</button> 
                <button onClick={()=> this.clickHandle()}>Click Me</button> */}      
                <button onClick={this.clickHandle}>Click Me</button>    
            </div>
        )
    }
}

export default EventBind
