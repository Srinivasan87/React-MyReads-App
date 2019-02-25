import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = { MyBooks:[] }

  componentDidMount(){
    this.GetBookData()
  }

  GetBookData = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({MyBooks:books})
    })
  }

  render() {
    return (
      <div className="app">

          {/* Added <Route> tag to match browser URL & load UI */}
          {/*Added history props for search books component to enable Back button/ Close button functionality*/}
          <Route exact path="/search" render={() => ( <SearchBooks /> )} />

          {/* Added <Route> tag to match browser URL & load UI */}
          <Route exact path="/" render={() => ( <ListBooks MyBooks={this.state.MyBooks}/>)} />
          
      </div>
    )
  }
}

export default BooksApp
