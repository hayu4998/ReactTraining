"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../../actions/bookActions';
import AuthorActions from '../../actions/authorActions';
import PublisherActions from '../../actions/publisherActions';
import BookStore from '../../stores/bookStore';
import { BookList } from './BookList';
import { AddBookForm } from './AddBookForm';
import { UpdateBookForm } from './UpdateBookForm';

export class Books extends React.Component {

    constructor() {
        super()
        this.state = {
            bookList: []
        }
    }

    componentDidMount() {
        BookStore.addChangeListener('changeBook', this._onBookChange.bind(this));
        BookStore.addChangeListener('deleteBook', this._onBookDelete.bind(this));
        BookActions.readBooks()
        AuthorActions.readAuthors();
        PublisherActions.readPublishers();
    }

    componentWillUnmount() {
        BookStore.removeChangeListener('changeBook', this._onBookChange.bind(this));
        BookStore.removeChangeListener('deleteBook', this._onBookDelete.bind(this));
    }

    _onBookChange() {
        this.setState({ bookList: BookStore.getAllBooks() });
    }

    _onBookDelete() {
        BookActions.readBooks();
    }

    render() {
        // console.log(this.state.bookList)
        return (
            <div>
                <h1>Books List</h1>
                <UpdateBookForm bookList={this.state.bookList} {...this.props} />
                <BookList {...this.props}
                    bookList={this.state.bookList}
                    onDeleteAction={BookActions.deleteBook}
                />
                <AddBookForm {...this.props} />
            </div>
        );
    }

}

Books.propTypes = {
    publisherList: PropTypes.array.isRequired,
    authorList: PropTypes.array.isRequired
};
