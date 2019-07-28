
import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Books

const BooksActions = {
    readBooks: function(){

        BookApi.getAllBooks((result)=>{
            Dispatcher.dispatch({
                actionType: 'read_books',
                data: result
            })
        })
    },

    deleteBook: function(bookId){

        BookApi.deleteBook(bookId,(result)=>{
            Dispatcher.dispatch({
                actionType: 'delete_book',
                status: result
            })
        })
    },
    
    readAuthorOfBook: function(bookId) {

        BookApi.getAuthorOfBook(bookId, (result)=>{
            Dispatcher.dispatch({
                actionType: 'read_authors_of_book',
                data: result
            })
        })
    },

    addBook: function(book) {
        // console.log("add book action called")
        BookApi.addBook(book,(result)=>{
            Dispatcher.dispatch({
                actionType: 'add_book',
                status: result
            })
        })
    }
}

module.exports = BooksActions;