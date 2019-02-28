import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import BookShelfs from './BookShelfs';
import propTypes from 'prop-types';

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelfs ShelfChange={props.ShelfChange} Shelfs={"Currently Reading"} MyBooks={props.MyBooks.filter((book) => (book.shelf === "currentlyReading"))} />
          <BookShelfs ShelfChange={props.ShelfChange} Shelfs={"Read"} MyBooks={props.MyBooks.filter((book) => (book.shelf === "read"))} />
          <BookShelfs ShelfChange={props.ShelfChange} Shelfs={"Want to Read"} MyBooks={props.MyBooks.filter((book) => (book.shelf === "wantToRead"))} />
        </div>
      </div>
      <div className="open-search">
        {/*Added Link tag to navigate to Search Book page. */}
        <Link to='/search' onClick={() => ({})}>Add a book</Link>
      </div>
    </div>
  )
}


ListBooks.propTypes = {
  ShelfChange: propTypes.func.isRequired,
  MyBooks: propTypes.array.isRequired,
}

export default ListBooks