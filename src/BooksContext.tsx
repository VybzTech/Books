import { createContext } from "react";
import BookModel from "./model/BookModel";

type BooksContextProps = {
  Books: BookModel[];
  setBooks: React.Dispatch<React.SetStateAction<BookModel[]>>;
};
const BooksContext = createContext<BooksContextProps | undefined>(undefined);
export default BooksContext;
