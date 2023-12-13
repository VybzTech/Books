type VolumeProps = {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  previewLink: string;
  infoLink: string;
};

type BookModel = {
  accessInfo: object;
  kind: string;
  etag: string;
  id: string;
  saleInfo: object;
  searchInfo: { textSnippet: string };
  selfLink: string;
  volumeInfo: VolumeProps;
};

export default BookModel;
