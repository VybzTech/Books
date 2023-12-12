type BookModel = {
  accessInfo: object;
  kind: string;
  etag: string;
  id: string;
  saleInfo: object;
  searchInfo: object;
  selfLink: string;
  volumeInfo: object;
};
// type BooksContextProps = { Books: BookModel[]; setBooks: React.Dispatch<React.SetStateAction<BookModel[]>> };
export default BookModel;
