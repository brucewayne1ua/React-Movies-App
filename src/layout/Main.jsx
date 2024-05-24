import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.searchMovies('matrix'); // Initial search by default when the page loads
  }

  searchMovies = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?apikey=676efa28&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search });
        } else {
          this.setState({ movies: [] });
        }
      })
      .catch((error) => console.log('Error fetching data:', error));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
