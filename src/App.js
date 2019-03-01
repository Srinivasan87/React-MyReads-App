import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {

  /** 
   * @description Component State Where data lives
   * MyBooks [] to store books from shelfs
   * LibraryBooks [] to store books from library
  */
  state = { MyBooks: [], LibraryBooks: [] }

  /** 
   * @description Mounted Data call on ComponentDidMount()
   * @returns List of Books
  */
  componentDidMount() {
    this.GetBookData();
  }

  /** 
   * @description Function which gets all book data from BooksAPI
   * @returns List of Books
  */
  GetBookData = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ MyBooks: books })
    });
  }

  /** 
   * @description Function which updates book data through BooksAPI
   * @param {string} book - Book whos shelf has been changed
   * @param {string} shelf - Name of the shelf where Book needs to be moved
   * @returns Update Books shelf
  */
  UpdateBookData = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf
      this.GetBookData()
    });
  }

  /** 
   * @description Function which search book data through BooksAPI
   * @param {string} query - The search query for the books
   * @returns List of books as per query
  */
  FindBook = (query) => {
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        books.error === "empty query" ? books = [] : this.setState({ LibraryBooks: books });
      });
    }
  }

  render() {
    return (
      <div className="app">

        {/* Added <Route> tag to match browser URL & load UI */}
        <Route exact path="/search" render={() => (<SearchBooks ShelfChange={this.UpdateBookData} FindBook={this.FindBook} SearchBooks={this.state.LibraryBooks} />)} />

        {/* Added <Route> tag to match browser URL & load UI */}
        <Route exact path="/" render={() => (<ListBooks ShelfChange={this.UpdateBookData} MyBooks={this.state.MyBooks} />)} />
        
      </div>
    )
  }
}

export default BooksApp
