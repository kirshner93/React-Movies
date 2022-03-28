function Movie(props) {
    return (
        <div className='card'>
            <div className='card-image waves-effect waves-block waves-light'>
                <img className='activator' src={props.Poster} />
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {props.Title}
                    <i className='material-icons right'>{props.Year}</i>
                </span>
                <p>
                    <a href='#'>{props.Type}</a>
                </p>
            </div>
        </div>
    );
}

export { Movie };
