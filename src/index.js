import React from 'react';
import ReactDOM from 'react-dom';
import booksApp from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

{/* Adding BrowserRouter to listers for browser URL changes */ }
ReactDOM.render(<BrowserRouter><booksApp /></BrowserRouter>, document.getElementById('root'))
