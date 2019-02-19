import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  state = {  }

  render() {
    return (
      <div className="app">

          {/* Added <Route> tag to match browser URL & load UI */}
          {/*Added history props for search books component to enable Back button/ Close button functionality*/}
          <Route exact path="/search" render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => history.push('/')}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          )} />

          {/* Added <Route> tag to match browser URL & load UI */}
          <Route exact path="/" render={() => ( <ListBooks/>)} />
          
      </div>
    )
  }
}

export default BooksApp
