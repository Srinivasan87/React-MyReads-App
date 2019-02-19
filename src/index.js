import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

{/* Adding BrowserRouter to listers for browser URL changes */}
ReactDOM.render(<BrowserRouter><BooksApp /></BrowserRouter>, document.getElementById('root'))
