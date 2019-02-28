import React from 'react';
import '../App.css';
import propTypes from 'prop-types';

function books(props) {
    return (
        <ol className="books-grid">
            {props.Books.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(event) => props.ShelfChange(book, event.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

books.propTypes = {
    ShelfChange: propTypes.func.isRequired,
    Books: propTypes.array.isRequired,
}

export default books