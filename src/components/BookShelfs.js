import React from 'react'
import '../App.css';
import Books from './Books';


const MyBooks = [
    {
        id: '1',
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
        backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
    },
    {
        id: '2',
        title: 'Enders Game',
        authors: 'Orson Scott Card',
        backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
    },
    {
        id: '3',
        title: '1776',
        authors: 'David McCullough',
        backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
    },
]

function BookShelfs(props) {
    return (
        <div className="bookshelf">
            {props.Shelfs.map((Shelf) => (
                <h2 className="bookshelf-title">{Shelf.title}</h2>
            ))}
            <div className="bookshelf-books">
                <Books Books={MyBooks} />
            </div>
        </div>
    )
}

export default BookShelfs