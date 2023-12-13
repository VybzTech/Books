import React, { createContext, useState } from "react";
import BookModel from "./model/BookModel";

type BooksContextProps = {
  Books: BookModel[];
  setBooks: React.Dispatch<React.SetStateAction<BookModel[]>>;
};
const BooksContext = createContext<BooksContextProps | undefined>(undefined);

const BooksProvider: React.FC = ({ children }) => {
  const [Books, setBooks] = useState<BookModel[]>([]);

  return (
    <BooksContext.Provider value={{ Books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
