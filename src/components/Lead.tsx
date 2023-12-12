import React, { useContext } from "react";
import BookSearch from "./BookSearch";
import BooksContext from "../BooksContext";
import Book from "./Book";
import BookModel from "../model/BookModel";

const Lead = () => {
  // sm md lg xl 2xl
  // const [Books,setBooks]  = useContext(BooksContext);
  // const BooksValue = useContext(BooksContext);
  // console.log(BooksValue);
  // type BookModel = {
  //   accessInfo: object;
  //   kind: string;
  //   etag: string;
  //   id: string;
  //   saleInfo: object;
  //   searchInfo: object;
  //   selfLink: string;
  //   volumeInfo: object;
  // };
  const { Books, setBooks } = useContext(BooksContext);
  // console.log(Books,setBooks);
  return (
    <div className="w-fit m-auto mt-36 text-center text-white">
      {/* md:w-32 lg:w-48 */}
      <span className="text-2xl capitalize font-serif italic opacity-75">
        welcome to my
      </span>
      <h2 className="text-8xl leading-0.5 text-bold font-sans font-extrabold mt-4">
        Books Library
      </h2>
      <BookSearch />

      {Books.map((bookmodel: BookModel, id: number) => (
        <Book key={id} book={bookmodel} />
      ))}
      {/* } */}
    </div>
  );
};

export default Lead;
