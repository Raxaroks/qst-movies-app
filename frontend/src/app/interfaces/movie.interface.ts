
export interface Movie {
  _id: string;
  title: string;
  description: string;
  rating: number;
  duration: number;
  genre: string[];
  releaseDate: Date;
  trailer: string;
  imgUrl: string;
}
