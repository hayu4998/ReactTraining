"use strict"
import React from 'react'
import _ from 'lodash'
import BooksActions from '../../actions/bookActions'
import propTypes from 'prop-types';

export class UpdateBookForm extends React.Component {
    constructor() {
        super()
        this.state = {
            book: {},
            title:"",
            publisher: {},
            isUpdatingingBook: false,
            isShowingContext: false
        }
        this.isUpdatingingBook = this.isUpdatingingBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitRequest = this.submitRequest.bind(this)
    }

    isUpdatingingBook() {
        this.setState((prevState) => {
            return {
                isUpdatingingBook: !prevState.isUpdatingingBook
            }
        })
        //console.log(this.state.isUpdatingingBook)
    }

    handleChange(event) {
        var { value, name } = event.target

        if (name == "book") {
            if (value) {
                value = JSON.parse(value)
                this.setState({
                    book: value,
                    title: value.title,
                    publisher:{
                        publisher_id: value.publisher_id,
                        publisher_name: value.publisher_name     
                    },
                    isShowingContext: true
                })
                return
            } else {
                return
            }
        }

        if (name == "publisher") {
            if (value) {
                value = JSON.parse(value)
            } else {
                return;
            }
        }
        this.setState({
            [name]: value
        })

    }

    submitRequest() {
        BooksActions.addBook({
            book_id: this.state.book.book_id,
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

        return (
            <div>
                {this.state.isUpdatingingBook ?
                    (
                        <form style={formStyle} onSubmit={this.submitRequest} >

                            <div className="form-group">
                                <label >Select the book You want Update</label>
                                <select className="form-control"
                                    name="book" onChange={this.handleChange}
                                >
                                    <option>Choose..</option>
                                    {
                                        _.map(this.props.bookList, (book) => {
                                            return (
                                                <option key={book.book_id} value={JSON.stringify(book)}> {book.title} </option>
                                            )
                                        })
                                    }
                                </select>
                    
                            </div>
                            {
                                this.state.isShowingContext &&
                                (
                                    <div>
                                        <div className="form-group">
                                            <label >Book title</label>
                                            <input type="text" className="form-control" name="title"
                                                placeholder={this.state.title} onChange={this.handleChange}
                                                value={this.state.title}
                                            />
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
                                    </div>
                                )
                            }


                            <button className="btn btn-primary" style={{ marginBottom: "15px" }} >Submit</button><br />
                            <button type="button" className="btn btn-success" onClick={this.isUpdatingingBook} >Hide form</button>
                        </form>
                    )
                    :
                    (
                        <button className="btn btn-success" style={formStyle} onClick={this.isUpdatingingBook}>Update book</button>
                    )
                }
            </div>
        )
    }

}

UpdateBookForm.propTypes = {
    bookList: propTypes.array,
    publisherList: propTypes.array,
};