import React, { useContext } from "react";
import BookSearch from "./BookSearch";
import BooksContext from "../BooksContext";
import Book from "./Book";

const Lead = () => {
  // sm md lg xl 2xl
  // const [Books,setBooks]  = useContext(BooksContext);
  // const BooksValue = useContext(BooksContext);
  // console.log(BooksValue);
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
  return (
    <div className="w-fit m-auto mt-36 text-center text-white">
      {/* md:w-32 lg:w-48 */}
      <span className="text-2xl capitalize font-serif italic opacity-75">
        welcome to my
      </span>
      <h2 className="text-8xl leading-0.5 text-bold font-sans font-extrabold mt-4">
        Books Library
      </h2>
      {/* <BooksContext.Consumer> */}

      <BookSearch />
{/* {Books.map((bookModel:BookModel,id:number)=><Book key={id} book={bookModel} />)} */}
      {/* </BooksContext.Consumer> */}
      {/*       
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book />
            {/* <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
            <p>{book.volumeInfo.description || 'No description available.'}</p> /}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Lead;
