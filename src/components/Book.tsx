import React from "react";
type BookModel = {
  accessInfo: object;
  kind: string;
  etag: string;
  id: string;
  saleInfo: object;
  searchInfo: object;
  selfLink: string;
  volumeInfo: object;
};
const Book = (book: BookModel) => {
  console.log(book);
  return <div>Book</div>;
};

export default Book;
