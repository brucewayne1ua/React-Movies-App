function Movie(props) {
    const { Title, Year, ImdbID, Id, Type, Poster } = props;

    return (
        <div id={Id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} alt={Title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year}<span> {Type}</span></p>
            </div>
        </div>
    );
}

export { Movie };
