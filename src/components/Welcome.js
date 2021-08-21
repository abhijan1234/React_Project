import React, {Component} from 'react'

class Welcome extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render = () => <h1>Welcome {this.props.name} {this.props.style} </h1>
}

export default Welcome