import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../BooksContext";
import { Link } from "react-router-dom";
import BookModel from "../model/BookModel";
import LinkSvg from "../icons/LinkSvg";
import ArrowRight from "../icons/ArrowRight";

const BookDetails: React.FC = () => {
  type BooksContextProps = {
    Books: BookModel[];
    setBooks: React.Dispatch<React.SetStateAction<BookModel[]>>;
  };

  const { Books } = useContext<BooksContextProps>(BooksContext);

  const { id } = useParams();
  const selectedBook = Books.find((book) => book.id === id);
  if (!selectedBook) {
    console.log(id);
    // MAKE ANOTHER API CALL WITH THE ID
    return <div>Book not found.</div>;
  }

  const { searchInfo, volumeInfo } = selectedBook;

  return (
    <div className={`bookdetail mr-24 mx-8 my-14 ${id}`}>
      <div className="font-serif flex gap-10">
        <Link
          className="text-stone-500 rounded rounded-3xl trans h-fit p-2.5 hover:bg-[#0a0a0a12] hover:text-stone-800"
          to={"/"}
        >
          <ArrowRight />
        </Link>
        <img
          className="h-fit w-[25%] rounded rounded-lg object-contain mb-2 ml-0.5 trans"
          src={volumeInfo?.imageLinks?.thumbnail}
          alt={volumeInfo?.title}
        />
        <div className="">
          <h2 className="font-sans font-bold text-4xl text-left">
            {volumeInfo?.title}
          </h2>
          <span className="flex gap-3 mb-3.5 text-stone-500">
            <p className="">{volumeInfo?.subtitle}</p>
            <Link className="text-stone-500 hover:text-stone-700 trans" to={volumeInfo?.previewLink}>
              <LinkSvg />
            </Link>
          </span>
          <p className="mb-5 text-2xl text-slate-800">
            {volumeInfo?.description}
          </p>
          {/* <p>{searchInfo?.textSnippet}</p> */}
          <p className="text-stone-500">
            <span>Authors: </span>
            {volumeInfo?.authors?.map((auth) => auth + ", ")}
          </p>
          {/* <p>{volumeInfo?.authors}</p> */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
