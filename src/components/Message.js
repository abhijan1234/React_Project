import React ,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            messgae:"Hey Visitor"
        }
    }
    changeMessage(){
        this.setState({
            messgae:'Thank you for subscribe'
        })
    }    
    render = () => 
    <div>
        <h1>{this.state.messgae}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
    </div>
}

export default Message