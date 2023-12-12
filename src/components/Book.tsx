import React from "react";
import BookModel from "../model/BookModel";
type Bookl = { book: BookModel };

const Book = ({ book }: Bookl) => {
  const {
    // accessInfo,
    // kind,
    // etag,
    // id,
    // saleInfo,
    searchInfo,
    // selfLink,
    volumeInfo,
  } = book;
// var snip = searchInfo?.textSnippet?.toString();
//   console.log(snip?.substr(0,100))

  return (
    <div className={`book ${book.id}`}>
      {/* <div className="font-serif"> */}
      <div className="font-serif">
        <img className="w-full rounded rounded-lg object-contain mb-2" src={volumeInfo?.imageLinks?.smallThumbnail} alt={volumeInfo?.title} />
        <h2 className="font-sans font-bold text-lg text-left">{volumeInfo?.title}</h2>
        <p>{searchInfo?.textSnippet?.toString().substr(0,75)}...</p>
      </div>
    </div>
    /**
     * {
    "title": "Alternate Worlds",
    "subtitle": "The Illustrated History of Science Fiction, 3d ed.",
    "authors": [
        "James Gunn"
    ],
    "publisher": "McFarland",
    "publishedDate": "2018-08-10",
    "description": "Alternate Worlds was first published in 1975 and became an instant classic, winning a Hugo award. This third edition brings the history of science fiction up to date, covering developments over the past forty years--a period that has seen the advent of technologies only imagined in the genre's Golden Age. As a literature of change, science fiction has become ever more meaningful, presaging dangers to humanity and, as Alvin Toffler wrote, guarding against \"the premature arrival of the future.\" The world has begun to recognize science fiction in many different ways, incorporating its elements in products, visual media and huge conventions.",
    "industryIdentifiers": [
        {
            "type": "ISBN_13",
            "identifier": "9781476673530"
        },
        {
            "type": "ISBN_10",
            "identifier": "1476673535"
        }
    ],
    "readingModes": {
        "text": false,
        "image": true
    },
    "pageCount": 337,
    "printType": "BOOK",
    "categories": [
        "Literary Criticism"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.2.0.preview.1",
    "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
    },
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=GE1nDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=GE1nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=GE1nDwAAQBAJ&printsec=frontcover&dq=Science-fiction&hl=&cd=10&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=GE1nDwAAQBAJ&dq=Science-fiction&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Alternate_Worlds.html?hl=&id=GE1nDwAAQBAJ"
}
     */
  );
};

export default Book;
