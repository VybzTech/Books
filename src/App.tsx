import "./index.css";
import BookDetails from "./components/BookDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import AllBooks from "./components/AllBooks";
import { BooksProvider } from "./BooksContext";

const App: React.FC = () => {
  return (
    <Router>
      <BooksProvider>
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BooksProvider>
    </Router>
  );
};

export default App;
