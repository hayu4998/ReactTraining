"use strict"
import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types';
import BooksActions from '../../actions/bookActions'

export class AddBookForm extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "",
            authors: [],
            existAuthor: {},
            newAuthor: "",
            publisher: {},
            isAddingBook: false
        }
        this.isAddingBook = this.isAddingBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pushNewAuthor = this.pushNewAuthor.bind(this)
        this.pushExistAuthor = this.pushExistAuthor.bind(this)
        // this.handleNewAuthorChange = this.handleChange.bind(this)
        this.submitRequest = this.submitRequest.bind(this)
    }

    isAddingBook() {
        this.setState((prevState) => {
            return {
                isAddingBook: !prevState.isAddingBook
            }
        })
        //console.log(this.state.isAddingBook)
    }

    handleChange(event) {
        var { value, name } = event.target

        if (name == "existAuthor" || name == "publisher") {
            if(value){
                value = JSON.parse(value)
            }else{
                return;
            }
        }
        this.setState({
            [name]: value
        })
        
    }

    pushNewAuthor() {
        if(this.state.newAuthor.author_name!= ""){
            this.setState(prevState => {
                return {
                    authors: prevState.authors.concat({ author_name: prevState.newAuthor }),
                    newAuthor: { author_name: ""}
                }
            })
        }
    }

    pushExistAuthor() {
        if(this.state.existAuthor.author_name != undefined){
            this.setState(prevState => {
                return {
                    authors: prevState.authors.concat({
                        author_id: prevState.existAuthor.author_id,
                        author_name: prevState.existAuthor.author_name
                    }),
                    existAuthor: {}
                }
            })
        }
    }

    submitRequest() {
        BooksActions.addBook({
            title: this.state.title,
            publisher_id: this.state.publisher.publisher_id,
            authors: this.state.authors
        })
    }

    render() {
        const formStyle = {
            margin: "2%",
            width: "35%"
        }
        console.log(this.state.publisher)
        return (
            <div>
                {this.state.isAddingBook ?
                    (
                        <form style={formStyle} onSubmit={this.submitRequest} >

                            <div className="form-group">
                                <label >Book title</label>
                                <input type="text" className="form-control" name="title"
                                    placeholder="Enter book title" onChange={this.handleChange}
                                    value={this.state.title}
                                />
                            </div>

                            <div className="form-group">
                                <label >Add from existed book author</label>
                                <select className="form-control"
                                    name="existAuthor" onChange={this.handleChange}
                                >   
                                    <option>Choose..</option>
                                    {
                                        _.map(this.props.authorList, (author) => {
                                            return (
                                                <option key={author.author_id} value={JSON.stringify(author)}> {author.author_name} </option>
                                            )
                                        })
                                    }
                                </select>
                                <button type="button" onClick={this.pushExistAuthor} >Add author to list</button>
                            </div>

                            <div className="form-group">
                                <label >Add new book author</label>
                                <input type="text" className="form-control" placeholder="New author name"
                                    name="newAuthor" onChange={this.handleChange}
                                    value={this.state.newAuthor}
                                />
                                <button type="button" onClick={this.pushNewAuthor} >Add author to list</button>
                            </div>
                            <div className="from -group">
                                <label>Added author:</label>
                                <ul>
                                    {
                                        _.map(this.state.authors, (author) => {
                                            return (
                                                <li>{author.author_name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="form-group">
                                <label >Book publisher</label>
                                <select className="form-control"
                                    name="publisher"
                                    onChange={this.handleChange}
                                >
                                    <option>Choose..</option>
                                    {
                                        _.map(this.props.publisherList, (publisher, index) => {
                                            return (
                                                <option key={index} value={JSON.stringify(publisher)} >{publisher.publisher_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <button className="btn btn-primary" style={{ marginBottom: "15px" }} >Submit</button><br />
                            <button type="button" className="btn btn-primary" onClick={this.isAddingBook} >Hide form</button>
                        </form>
                    )
                    :
                    (
                        <button className="btn btn-primary" style={formStyle} onClick={this.isAddingBook}>add book</button>
                    )
                }
            </div>
        )
    }

}

AddBookForm.propTypes = {
    publisherList: propTypes.array,
    authorList: propTypes.array
};
