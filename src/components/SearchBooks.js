import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Books from './Books';
import propTypes from 'prop-types';

function SearchBooks(props) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => props.FindBook(event.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                {
                    props.SearchBooks.length === 0 ? "No Data Found" : <Books ShelfChange={props.ShelfChange} Books={props.SearchBooks} />
                }
            </div>
        </div>
    )
}

SearchBooks.propTypes = {
    ShelfChange: propTypes.func.isRequired,
    FindBook: propTypes.func.isRequired,
    SearchBooks: propTypes.array.isRequired,
}
export default SearchBooks