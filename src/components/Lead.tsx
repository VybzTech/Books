import React, { useContext } from "react";
import BookSearch from "./BookSearch";
import BooksContext from "../BooksContext";
import Book from "./Book";
import BookModel from "../model/BookModel";
import { Toaster } from "react-hot-toast";

const Lead = () => {
  type BooksContextProps = {
    Books: BookModel[];
    setBooks: React.Dispatch<React.SetStateAction<BookModel[]>>;
  };

  const { Books, setBooks } = useContext<BooksContextProps>(BooksContext);

  return (
    <div className="w-fit m-auto mt-36 text-center text-white">
      <span className="text-2xl capitalize font-serif italic opacity-75">
        welcome to my
      </span>
      <h2 className="text-8xl leading-0.5 text-bold font-sans font-extrabold mt-4">
        Books Library
      </h2>
      <BookSearch />
      <div className="Bookies grid items-left justify-left text-stone-600 bold text-left mt-5">
        {Books?.map((bookmodel: BookModel, id: number) => (
          <Book key={id} book={bookmodel} />
        ))}
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Lead;
