import React from 'react';
import '../App.css';
import Books from './Books';
import propTypes from 'prop-types';

function BookShelfs(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.Shelfs}</h2>
            <div className="bookshelf-books">
                <Books ShelfChange={props.ShelfChange} Books={props.MyBooks} />
            </div>
        </div>
    )
}

BookShelfs.propTypes = {
    ShelfChange: propTypes.func.isRequired,
    Shelfs: propTypes.string.isRequired,
    MyBooks: propTypes.array.isRequired,
}


export default BookShelfs