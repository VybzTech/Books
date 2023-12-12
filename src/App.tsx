import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";
import BG from "./components/BG";
import Navbar from "./components/Navbar";
import Lead from "./components/Lead";
import BooksContext from "./BooksContext";
import BookModel from "./model/BookModel";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  // type BooksContextProps = { Books: BookModel[]; setBooks: React.Dispatch<React.SetStateAction<BookModel[]>> };
  // const const BooksContext = createContext<BooksContextProps | undefined>(undefined);

  const [Books, setBooks] = useState<BookModel[]>([]);

  return (
    <>
      <Navbar />
      <BG />
      <BooksContext.Provider value={{ Books, setBooks }}>
        <Lead />
      </BooksContext.Provider>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default App;
