import React from "react";
import BookModel from "../model/BookModel";
// type Bookl = {id:number,book:BookModel}
//   accessInfo: object;
//   kind: string;
//   etag: string;
//   id: string;
//   saleInfo: object;
//   searchInfo: object;
//   selfLink: string;
//   volumeInfo: object;
// };
const Book = (book : BookModel) => {
  console.log(book);
  return (
    <div className={`book ${book.id}`}>
      <div className="p-2 mr-4">
        {/* <img src={book.volumeInfo} alt={book.volumeInfo?.title} /> */}
        {/* <h4>{book.volumeInfo?.title}</h4> */}
        {/* {book.etag} */}
      </div>
    </div>
  );
};

export default Book;
