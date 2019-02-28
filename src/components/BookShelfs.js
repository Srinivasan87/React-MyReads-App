import React from 'react';
import '../App.css';
import books from './Books';
import propTypes from 'prop-types';

function bookShelfs(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.Shelfs}</h2>
            <div className="bookshelf-books">
                <books ShelfChange={props.ShelfChange} Books={props.MyBooks} />
            </div>
        </div>
    )
}

bookShelfs.propTypes = {
    ShelfChange: propTypes.func.isRequired,
    Shelfs: propTypes.string.isRequired,
    MyBooks: propTypes.array.isRequired,
}


export default bookShelfs