import React, { useContext } from "react";
import BookSearch from "./BookSearch";
import BooksContext from "./BooksContext";

const Lead = () => {
  // sm md lg xl 2xl
  const BooksValue = useContext(BooksContext);
  console.log(BooksValue);
  return (
    <div className="w-fit m-auto mt-32 md:w-32 lg:w-48 text-center text-white">
      {/*  */}
      <span className="text-2xl capitalize font-serif italic">
        welcome to my
      </span>
      <h2 className="text-6xl  text-bold font-sans font-extrabold mt-4">
        Books Library
      </h2>
      {/* <BooksContext.Consumer> */}

      <BookSearch />
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
