import React, { Component } from 'react';

import { connect } from 'react-redux';

class BooksList extends Component {
    renderBooksList() {
        return this.props.books.map((book) => {
            return (
                <li key="{book.title}" className="list-group-item">
                    {book.title}
                </li>
            );
        });
    };

    render() {
        console.log(this.props.asdf);
        return (
            <ul className="list-group col-sm-4">
                {this.renderBooksList()}
            </ul>
        );
    };
};

function mapStateToProps(state) {
    // Whatever is returned will show up as props 
    // inside of bookList

    // this is our connection between our container class and our application state (Redux)
    return{
        books: state.books
    };

}

export default connect(mapStateToProps)(BooksList);