"use strict"

import React from 'react';
import PropTypes from 'prop-types';
//import {PublisherActions} from '../../actions/publisherActions'
//import {AddPublisherForm} from './AddPublisherForm'
import {PublisherList} from './PublisherList';

export class Publishers extends React.Component{

    render() {
        return(
            <div>
                <PublisherList publisherList = {this.props.publisherList} />
            </div>
        );
    }

}

Publishers.propTypes = {
    publisherList: PropTypes.array.isRequired
};
