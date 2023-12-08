// src/BookSearch.js
import { useEffect, useState } from "react";
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
      console.log(response.data.items || []);
      //   setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    searchBooks();
  }, []);

  return (
    <div>
      {/* <h1>Google Books Search</h1> */}
      <div className="search mt-20 w-[40vw] py-1.5 px-5 rounded rounded-3xl border flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a book search query"
          className="w-full bg-transparent focus:outline-none focus-visible:outline-none py-1.5"
        />
        <span className="searchBtn" onClick={searchBooks}>
          <svg
            className="w-6 h-6 hover:fill-[#fafafa77] hover:cursor-pointer focus:text-white"
            xmlns="http://www.w3.org/2000/svg"
            // height="18px"
            // width="18px"
            viewBox="0 0 24 24"
            fill="#fafafa33"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default BookSearch;
