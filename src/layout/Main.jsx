import React from 'react';
import { MoviesList } from '../components/MoviesList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=7b06e49a&s='matrix'")
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });

        fetch(
            `http://www.omdbapi.com/?apikey=7b06e49a&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        return (
            <main className='content container'>
                <Search searchMovies={this.searchMovies} />

                {this.state.loading ? (
                    <Preloader />
                ) : (
                    <MoviesList movies={this.state.movies} />
                )}
            </main>
        );
    }
}

export { Main };
