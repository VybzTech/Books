import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";
import BG from "./components/BG";
import Navbar from "./components/Navbar";
import Lead from "./components/Lead";
import BooksContext from "./BooksContext";

function App() {
  const [Books, setBooks] = useState<object[]>([]);
  return (
    <>
      <Navbar />
      <BG />

      <BooksContext.Provider value={[Books, setBooks]}>
        <Lead />
      </BooksContext.Provider>
    </>
  );
}

export default App;
