import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import axios from 'axios'
import config from '../../config'
// import BookAction from '../../actions/bookActions'


function AuthorList(props) {
    // console.log(props)

    return (
        <div>
            {
                _.map(props.authors, (author) => <p key = {author.author_id} >{author.author_name}</p>)
            }
        </div>
    )
}

export class AuthorOfBook extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false,
            authors: []
        }
        this.isShowResult = this.isShowResult.bind(this);
        this.loadAuthors = this.loadAuthors.bind(this);
    }

    // componentDidMount(){
    //     this.loadAuthors();
    // }

    // _onAuthorOfBookChange() {
    //     AuthorOfBook.setState({ author: this.getAuthorOfBook() })
    // }

    // getAuthorOfBook(){
    //     BookAction.readAuthorOfBook(this.props.book_id)
    // }

    loadAuthors(cb) {
        if (this.state.authors.length == 0) {
            axios.get(config.api + '/authorOfBook/' + this.props.bookId)
                .then(response => response.data)
                .then(data => {
                    //console.log(data)
                    this.setState({
                        authors: data
                    })
                })
                .then(() => cb())
        } else {
            cb()
        }
    }

    isShowResult() {
        this.setState((prevState) => {
            return {
                isClicked: !prevState.isClicked
            }
        })
    }



    // <div class="dropdown">
    // <button class="dropbtn">Dropdown</button>
    // <div class="dropdown-content">
    //     <a href="#">Link 1</a>
    //     <a href="#">Link 2</a>
    //     <a href="#">Link 3</a>
    // </div>
    // </div>

    render() {
        // console.log(this.state.authors)
        var holder = ">> detail"
        return (

                <div>
                    
                    {
                        !this.state.isClicked &&
                        <p
                            onMouseOver={() => this.loadAuthors(this.isShowResult)}
                        > {holder}</p>
                        
                    }
                    
                    {
                        this.state.isClicked && <AuthorList authors={this.state.authors} />
                    }
                    </div>
                        )
                    }
}

AuthorOfBook.propTypes = {
    bookId: PropTypes.any
}
AuthorList.propTypes = {
    authors: PropTypes.any

}