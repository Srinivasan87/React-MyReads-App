import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Books from './Books';

function SearchBooks (props) {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                     <input type="text" placeholder="Search by title or author" onChange={(event) => props.FindBook(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books ShelfChange={props.ShelfChange} Books={props.SearchBooks} />
                </div>
            </div>
        )
    }
export default SearchBooks