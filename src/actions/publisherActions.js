
import PublisherApi from '../api/publisherApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Publishers

const PublishersActions = {
    readPublishers: function(){

        PublisherApi.getAllPublishers((result)=>{
            Dispatcher.dispatch({
                actionType: 'read_publishers',
                data: result
            })

        })
    }
}

module.exports = PublishersActions;