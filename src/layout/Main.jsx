import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
    state = {
        movies: []
    };

    componentDidMount() {
        this.searchMovies("matrix"); // Початковий пошук за замовчуванням при завантаженні сторінки
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=676efa28&&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
            .catch(error => console.log("Error fetching data:", error));
    };

    render() {
        const { movies } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {movies.length ? (
                    <Movies movies={movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export { Main };
