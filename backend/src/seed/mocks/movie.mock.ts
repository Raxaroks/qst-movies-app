import { CreateMovieDto } from 'src/movie/dto';
import { Movie } from 'src/movie/entities/movie.entity';

export const mockedMovies: CreateMovieDto[] = [
  {
    title: 'Avengers: Age of Ultron',
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    rating: 7.3,
    duration: 141,
    genre: ['action', 'adventure', 'sci-fi'],
    releaseDate: new Date('2015-05-01T05:00:00.000Z'),
    trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
  },
  {
    title: 'Guardians of the Galaxy',
    description:
      'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    rating: 8,
    duration: 121,
    genre: ['action', 'adventure', 'comedy'],
    releaseDate: new Date('2014-08-01T05:00:00.000Z'),
    trailer: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg',
  },
  {
    title: 'Knives Out',
    description:
      'A detective investigates the death of a patriarch of an eccentric, combative family.',
    rating: 7.9,
    duration: 130,
    genre: ['comedy', 'crime', 'drama'],
    releaseDate: new Date('2019-11-27T05:00:00.000Z'),
    trailer: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    description:
      'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    rating: 8.4,
    duration: 117,
    genre: ['action', 'animation', 'adventure'],
    releaseDate: new Date('2018-12-14T05:00:00.000Z'),
    trailer: 'https://www.youtube.com/watch?v=tg52up16eq0',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
  },
  {
    title: 'Tenet',
    description:
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    rating: 7.8,
    duration: 150,
    genre: ['action', 'sci-fi'],
    releaseDate: new Date('2020-09-03T05:00:00.000Z'),
    trailer:
      'https://www.youtube.com/watch?v=LdOM0x0XDMo&ab_channel=WarnerBros.Pictures',
    imgUrl:
      'https://m.media-amazon.com/images/I/516bxrWc2BL._AC_UF894,1000_QL80_.jpg',
  },
];
