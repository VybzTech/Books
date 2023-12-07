// src/BookSearch.js
import { useState } from "react";
import axios from "axios";
// type prop ={set: React.FC}
// const BookSearch = (setBooks:prop) => {
const BookSearch = () => {
  const [query, setQuery] = useState("Science-fiction");

  //   const contextValue = books;

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      //   setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      {/* <h1>Google Books Search</h1> */}
      <div className="search mt-20">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a book search query"
          className="w-[40vw] p-2 px-3 rounded rounded-3xl bg-transparent border"
        />
        <button onClick={searchBooks}>Search</button>
      </div>
    </div>
  );
};

export default BookSearch;
