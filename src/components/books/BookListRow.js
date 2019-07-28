import React from 'react';
import {AuthorOfBook} from './AuthorOfBook'
import PropTypes from 'prop-types';
// import UpdateBookForm from './UpdateBookForm'

export const BookListRow=(props) => {
    
    return (
        <tr key={props.book.book_id}>
            <td> {props.index+1} </td>
            <td> {props.book.title} </td>
            <td> {props.book.publisher_name} </td>
            <td style = {{width: "15%"}} > <AuthorOfBook bookId = {props.book.book_id} /> </td>
            <td > 
                <button className = "btn btn-danger" onClick = {()=>props.onDeleteAction(props.book.book_id)} > Delete </button>
            </td>
        </tr>
    )
}

BookListRow.propTypes = {
    onDeleteAction: PropTypes.func,
    book: PropTypes.any,
    index: PropTypes.any,
};

