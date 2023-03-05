import { getByQuery } from "components/Service/API";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

export const SearchBar = () => {
    const location = useLocation()
    const [search, setSearch] = useState('');
    const [submited, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (submited === true) {
            const getMoviesByQuery = async () => {
                const searchedMovies = await getByQuery(search)
                setMovies(searchedMovies) 
            }
            getMoviesByQuery()
        }
    }, [search, submited])
    const handleInputValue = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputValue} type="text" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}><Link
                        to={`/movies/${movie.id.toString()}`}
                        state={{ from: location }}
                    >{movie.name}</Link></li>
                })}
            </ul>
        </>
    )

}