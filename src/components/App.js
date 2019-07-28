"use strict"

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './Header.js';
import { Home } from './Home.js';
import { Books } from './books/Books.js';
import { Authors } from './authors/Authors.js';
import { Publishers } from './publishers/Publishers.js'
// import BookStore from '../stores/bookStore';
import AuthorStore from '../stores/authorStore';
import PublisherStore from '../stores/publisherStore';
// import BookActions from '../actions/bookActions';
// import AuthorActions from '../actions/bookActions';
// import PublisherActions from '../actions/bookActions';
// import AuthorOfBookStore from '../stores/authorOfBookStore'
// import AuthorOfBook from './books/AuthorOfBook'



export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            authorList: [],
            publisherList: []
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route
                        exact path='/'
                        component={Home}
                    />
                    <Route
                        path='/books'
                        render={() => (
                            <Books
                                authorList={this.state.authorList}
                                publisherList={this.state.publisherList}
                            />)
                        }
                    />
                    <Route
                        path='/authors'
                        render={(props) => (
                            <Authors
                                {...props}
                                authorList={this.state.authorList}
                            />)
                        }
                    />
                    <Route
                        path='/publishers'
                        render={(props) => (
                            <Publishers
                                {...props}
                                publisherList={this.state.publisherList}
                            />)
                        }
                    />
                </Switch>
            </div>
        );
    }

    componentDidMount() {

        //AuthorOfBookStore.addChangeListener('changeAuthorOfBook', AuthorOfBook._onAuthorOfBookChange.bind(AuthorOfBook));
        AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
        PublisherStore.addChangeListener(this._onPublisherChange.bind(this));

        // BookActions.readBooks();
        // AuthorActions.readAuthors();
        // PublisherActions.readPublishers();
    }

    componentWillUnmount() {

        //AuthorOfBookStore.removeChangeListener('changeAuthorOfBook', AuthorOfBook._onAuthorOfBookChange.bind(AuthorOfBook));
        AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
        PublisherStore.removeChangeListener(this._onPublisherChange.bind(this));
    }

    _onAuthorChange() {
        this.setState({ authorList: AuthorStore.getAllAuthors() });
    }

    _onPublisherChange() {
        this.setState({ publisherList: PublisherStore.getAllPublishers() });
    }


}