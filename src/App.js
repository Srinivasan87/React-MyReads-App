import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  
  //State Where data lives
  state = { MyBooks:[],LibraryBooks:[] }

  //Mounted data call on ComponentDidMount()
  componentDidMount(){
    this.GetBookData()
  }

  //Function which gets all book data
  GetBookData = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({MyBooks:books})
    })
  }

  //Function which updates book data
  UpdateBookData = (book,shelf) => {
    BooksAPI.update(book,shelf).then(response =>{
      book.shelf=shelf
      this.GetBookData()
    })
  }

  //Function which search book data
  FindBook = (query) => {
    if(query!=="")
    {
    BooksAPI.search(query).then((books)=>{
    books.error === "empty query" ? books=[]:  this.setState({LibraryBooks:books});
    })
   }
  }

  render() {
    return (
      <div className="app">

          {/* Added <Route> tag to match browser URL & load UI */}
          {/*Added history props for search books component to enable Back button/ Close button functionality*/}
          <Route exact path="/search" render={() => ( <SearchBooks ShelfChange={this.UpdateBookData} FindBook={this.FindBook} SearchBooks={this.state.LibraryBooks} /> )} />

          {/* Added <Route> tag to match browser URL & load UI */}
          <Route exact path="/" render={() => ( <ListBooks ShelfChange={this.UpdateBookData} MyBooks={this.state.MyBooks}/>)} />
          
      </div>
    )
  }
}

export default BooksApp
