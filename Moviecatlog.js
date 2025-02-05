const movies = [
  { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
  { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
  { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
  { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
  { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
  { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
  { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
];

// 1. Sort the Movies by Rating
const sortByRating = () => {
  return [...movies].sort((a, b) => b.rating - a.rating);
};

// 2. Find a Movie by Title
const findMovieByTitle = (title) => {
  const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
  return movie || `Movie titled "${title}" is not in the catalog.`;
};

// 3. Get Movies with a Rating Greater Than 8
const getMoviesAboveRating = (threshold) => {
  return movies.filter(movie => movie.rating > threshold);
};

// 4. List All Movie Titles
const listMovieTitles = () => {
  return movies.map(movie => movie.title);
};

// 5. Count Movies in a Specific Genre
const countMoviesByGenre = (genre) => {
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()).length;
};

// 6. Check if All Movies Are Rated Above 7
const areAllMoviesAboveRating = (threshold) => {
  return movies.every(movie => movie.rating > threshold);
};

// 7. Get Movies Released After 2000
const getMoviesAfterYear = (year) => {
  return movies.filter(movie => movie.releaseYear > year);
};

// Testing the functions
console.log("Sorted by Rating:", sortByRating());
console.log("Find Movie by Title (Inception):", findMovieByTitle('Inception'));
console.log("Movies with Rating > 8:", getMoviesAboveRating(8));
console.log("All Movie Titles:", listMovieTitles());
console.log("Count Movies in Genre (Sci-Fi):", countMoviesByGenre('Sci-Fi'));
console.log("Are all movies rated above 7?", areAllMoviesAboveRating(7));
console.log("Movies released after 2000:", getMoviesAfterYear(2000));
