"use strict"
import React from 'react'

export class AddPublisherForm extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "",
            authors: [],
            typingAuthor: "",
            publisher: "",
            isAddingPublisher: false
        }
        this.isAddingPublisher = this.isAddingPublisher.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pushAuthor = this.pushAuthor.bind(this)
        //this.submitRequest = this.submitRequest.bind(this)
    }

    isAddingPublisher() {
        this.setState((prevState)=>{
            return {
                isAddingPublisher: !prevState.isAddingPublisher
            }
        })
        //console.log(this.state.isAddingPublisher)
    }

    handleChange(event) {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    pushAuthor(){
        this.setState(prevState=>{
            return {
                authors: prevState.authors.concat(prevState.typingAuthor),
                typingAuthor: ""
            }
        })
    }

    submitRequest(){

    }
    
    render() {
        const formStyle = {
            margin: "2%",
            width: "35%",
            marginBottom: "50px"
        }
        
        return(
            <div>
               {this.state.isAddingPublisher ?
                    (
                        <form style = {formStyle} onSubmit = {this.submitRequest} >
                            <div className="form-group">
                                <label >Publisher title</label>
                                <input type="text" className="form-control" name="title" 
                                placeholder="Enter publisher title" onChange = {this.handleChange} 
                                value = {this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label >Publisher author</label>
                                <input type="text" className="form-control" placeholder="Author" 
                                name = "typingAuthor" onChange = {this.handleChange} 
                                value = {this.state.typingAuthor}
                                />
                                <small>authors: {this.state.authors}</small><br/>
                                <button type = "button" onClick = {this.pushAuthor} >Add author</button>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" >Check me out</label>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    )
                    :
                    (
                        <button className = "btn btn-primary" style = {formStyle} onClick = {this.isAddingPublisher}>add publisher</button>
                    )
                }
            </div>
        )
    }

}
