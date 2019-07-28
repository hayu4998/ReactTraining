"use strict"
import React from 'react'

export class AddAuthorForm extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "",
            authors: [],
            typingAuthor: "",
            publisher: "",
            isAddingAuthor: false
        }
        this.isAddingAuthor = this.isAddingAuthor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pushAuthor = this.pushAuthor.bind(this)
        //this.submitRequest = this.submitRequest.bind(this)
    }

    isAddingAuthor() {
        this.setState((prevState)=>{
            return {
                isAddingAuthor: !prevState.isAddingAuthor
            }
        })
        //console.log(this.state.isAddingAuthor)
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
               {this.state.isAddingAuthor ?
                    (
                        <form style = {formStyle} onSubmit = {this.submitRequest} >
                            <div className="form-group">
                                <label >Author title</label>
                                <input type="text" className="form-control" name="title" 
                                placeholder="Enter author title" onChange = {this.handleChange} 
                                value = {this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label >Author author</label>
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
                        <button className = "btn btn-primary" style = {formStyle} onClick = {this.isAddingAuthor}>add author</button>
                    )
                }
            </div>
        )
    }

}
