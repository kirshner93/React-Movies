import { Movie } from './Movie';

function MoviesList(props) {
    console.log(props);
    const { movies = [] } = props;
    return (
        <div className='MoviesList'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>FAIL NOT FOUND</h4>
            )}
        </div>
    );
}

export { MoviesList };
