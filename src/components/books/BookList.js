"use strict"
import React from "react";
import PropTypes from 'prop-types';
import {BookListRow} from "./BookListRow"
import _ from 'lodash';

 
export function BookList(props) {
    // console.log(props.bookList)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Author</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(
                            props.bookList,
                            (book, index) => (
                                < BookListRow 
                                    key = {book.book_id}
                                    book = {book}
                                    index = {index}
                                    onDeleteAction = {props.onDeleteAction}
                                />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


BookList.propTypes = {
    bookList: PropTypes.array.isRequired,
    onDeleteAction: PropTypes.func,
};




