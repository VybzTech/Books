// import React, { useState } from "react";
import BG from "./BG";
import Navbar from "./Navbar";
import Lead from "./Lead";
// import BooksContext from "../BooksContext";
import { Toaster } from "react-hot-toast";
// import BookModel from "../model/BookModel";

const AllBooks = () => {
  return (
    <>
      <BG />
      <Navbar />
      <Lead />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default AllBooks;
