
import AuthorApi from '../api/authorApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Authors

const AuthorsActions = {
    readAuthors: function(){

        AuthorApi.getAllAuthors((result)=>{
            Dispatcher.dispatch({
                actionType: 'read_authors',
                data: result
            })

        })
    }
}

module.exports = AuthorsActions;