"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../../actions/authorActions';
// import {AddAuthorForm} from './AddAuthorForm';
import _ from 'lodash';


export class AuthorList extends React.Component{

    createAuthorRow(author,index){
        return (
            <tr key={author.author_id}>
                <td> {index+1} </td>
                <td> {author.author_name} </td>
            </tr>
        );
    }

    componentDidMount(){
        AuthorActions.readAuthors();
    }

    render() {
        return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(this.props.authorList, this.createAuthorRow)
                        }
                    </tbody>    
                </table>
               
            </div>
        );
    }
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



