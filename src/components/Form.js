import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : ''
        }
    }
    handleUsername = (event) =>{
        this.setState({
            username : event.target.value
        })
    }
    handleComment = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopic=event=>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <select value={this.state.topic} onChange={this.handleTopic}> 
                        <option>Angular</option>
                        <option>React</option>
                        <option>Spring</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
