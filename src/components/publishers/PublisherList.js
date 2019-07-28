"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import PublisherActions from '../../actions/publisherActions';
// import {AddPublisherForm} from './AddPublisherForm';
import _ from 'lodash';


export class PublisherList extends React.Component{

    createPublisherRow(publisher,index){
        return (
            <tr key={publisher.publisher_id}>
                <td> {index + 1} </td>
                <td> {publisher.publisher_name} </td>
                <td> {publisher.publisher_address} </td>
                <td> {publisher.publisher_phone} </td>
            </tr>
        );
    }

    componentDidMount(){
        PublisherActions.readPublishers();
    }

    render() {
        
        return(
            <div>
                <h1>Publishers</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(this.props.publisherList, this.createPublisherRow)
                        }
                    </tbody>    
                </table>
            </div>
        );
    }
}

PublisherList.propTypes = {
    publisherList: PropTypes.array.isRequired
};



