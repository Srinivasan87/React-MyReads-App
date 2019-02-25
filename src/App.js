import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {  }

  render() {
    return (
      <div className="app">

          {/* Added <Route> tag to match browser URL & load UI */}
          {/*Added history props for search books component to enable Back button/ Close button functionality*/}
          <Route exact path="/search" render={() => ( <SearchBooks /> )} />

          {/* Added <Route> tag to match browser URL & load UI */}
          <Route exact path="/" render={() => ( <ListBooks/>)} />
          
      </div>
    )
  }
}

export default BooksApp
