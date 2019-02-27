import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import BookShelfs from './BookShelfs';

class ListBooks extends React.Component {
    render() {
        return (

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelfs ShelfChange={this.props.ShelfChange} Shelfs={"Currently Reading"} MyBooks={this.props.MyBooks.filter((book) => (book.shelf === "currentlyReading"))} />
                <BookShelfs ShelfChange={this.props.ShelfChange} Shelfs={"Read"} MyBooks={this.props.MyBooks.filter((book) => (book.shelf === "read"))} />
                <BookShelfs ShelfChange={this.props.ShelfChange} Shelfs={"Want to Read"} MyBooks={this.props.MyBooks.filter((book) => (book.shelf === "wantToRead"))} />
             </div>
            </div>
            <div className="open-search">
              {/*Added Link tag to navigate to Search Book page. */}
              <Link to='/search' onClick={() => ({}) }>Add a book</Link>
            </div>
          </div>
        )
    }    

}

export default ListBooks