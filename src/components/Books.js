import React from 'react'
import '../App.css';

function Books(props) {
    return (
        <ol className="books-grid">
            {props.Books.map((book) => (
                <li id={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book.backgroundImage }}></div>
                            <div className="book-shelf-changer">
                                <select>
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

export default Books