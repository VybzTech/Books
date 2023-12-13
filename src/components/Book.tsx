import BookModel from "../model/BookModel";
import { Link } from "react-router-dom";
type Bookl = { book: BookModel };

const Book = ({ book }: Bookl) => {
  const { id, searchInfo, volumeInfo } = book;

  return (
    <div className={`book mb-2 ${id}`}>
      <div className="font-serif">
        <Link to={`/book/${id}`}>
          <img
            className="w-full rounded rounded-lg object-contain mb-2 trans"
            src={volumeInfo?.imageLinks?.smallThumbnail}
            alt={volumeInfo?.title}
          />
          <h2 className="font-sans font-bold text-lg text-left mb-0.5">
            {volumeInfo?.title}
          </h2>
        </Link>
        <p>
          {searchInfo?.textSnippet === ""
            ? volumeInfo?.subtitle
            : searchInfo?.textSnippet?.toString().substr(0, 90)}
          ...
        </p>
      </div>
    </div>
  );
};

export default Book;
