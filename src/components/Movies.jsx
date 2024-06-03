import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className='Movies'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Errorka</h4>
      )}
    </div>
  );
}

export { Movies };
