import React from 'react'
import '../App.css';
import Books from './Books';

function BookShelfs(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.Shelfs}</h2>
            <div className="bookshelf-books">
                <Books Books={props.MyBooks} />
            </div>
        </div>
    )
}

export default BookShelfs