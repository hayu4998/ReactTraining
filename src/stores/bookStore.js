import Dispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';


let _bookStore = {
    books: [],
    lastOperationStatus: ""
};

class BookStoreClass extends EventEmitter {

    addChangeListener(event, cb) {
        this.on(event, cb);
    }

    removeChangeListener(event, cb) {
        this.removeListener(event, cb);
    }

    emitChange(event) {
        this.emit(event);
    }

    getAllBooks() {
        return _bookStore.books;
    }

    deleteBook() {
        return _bookStore.lastOperationStatus;
    }

    getLastOperationStatus() {
        return _bookStore.lastOperationStatus;
    }

}

const BookStore = new BookStoreClass();

Dispatcher.register((action) => {

    switch (action.actionType) {
        case 'read_books':
            _bookStore.books = action.data;
            BookStore.emitChange('changeBook');
            break;

        case 'delete_book':
            _bookStore.lastOperationStatus = action.status
            BookStore.emitChange('deleteBook');
            break;

        case 'add_book':
            _bookStore.lastOperationStatus = action.status
            BookStore.emitChange('changeBook');
            break;

        default:
            return;
    }
});

export default BookStore;