import React from 'react'
import '../App.css';
import Books from './Books';

function BookShelfs(props) {
    return (
        <div className="bookshelf">
            {props.Shelfs.map((Shelf) => (
                <h2 className="bookshelf-title">{Shelf.title}</h2>
            ))}
            <div className="bookshelf-books">
                <Books Books={props.MyBooks} />
            </div>
        </div>
    )
}

export default BookShelfs