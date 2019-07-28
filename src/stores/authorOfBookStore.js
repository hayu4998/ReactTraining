import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';


let _authorOfBookStore = {
  authorOfBook: [],
  lastOperationStatus: ""
};

class AuthorOfBookStoreClass extends EventEmitter{

    addChangeListener(event,cb){
        this.on(event, cb);
    }

    removeChangeListener(event,cb){
        this.removeListener(event, cb);
    }

    emitChange(event){
        this.emit(event);
    }

    getAuthorOfBooks(){
        return _authorOfBookStore.authorOfBook;
    }

    deleteAuthorOfBook(){
        return _authorOfBookStore.lastOperationStatus;
    }

    getLastOperationStatus() {
        return _authorOfBookStore.lastOperationStatus;
    }

}

const AuthorOfBookStore = new AuthorOfBookStoreClass();

Dispatcher.register( (action) => {

    switch (action.actionType){
        case 'read_author_of_book':
            _authorOfBookStore.authorOfBook = action.data;
            AuthorOfBookStore.emitChange('changeAuthorOfBook');
            break;

        case 'delete_author_of_book':
            _authorOfBookStore.lastOperationStatus = action.staus
            AuthorOfBookStore.emitChange('deleteAuthorOfBook');
            break;
        default:
            return;
    }
} );

export default AuthorOfBookStore;