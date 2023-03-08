import { SearchBar } from "components/SearchBar/SearchBar"
import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getByQuery } from "Service/API";
import css from '../components/SearchBar/SearchBar.module.css'

const MoviesPage = () => {
  const [submited, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')
    const location = useLocation()
 
    useEffect(() => {
     setSubmit(true)
 }, [])

    useEffect(() => {
        if (submited === true && query) {
            try {
               const getMoviesByQuery = async () => {
                const searchedMovies = await getByQuery(query)
                setMovies(searchedMovies) 
                 setSubmit(false)
            }
         
            getMoviesByQuery() 
            } catch (error) {
                console.log('error');
            }
            
        }
    }, [query, submited])
    
    const submitListener = (query) => {
    setSearchParams({ query })
    setSubmit(true)
}
 
    return (
        <>
            <SearchBar
                onSubmit={submitListener}
                query={query}
            />
             <ul
            className={css.list}
            >
                {movies.map(movie => {
                    return <li
                        className={css.item}
                        key={movie.id}><Link
                        to={`/movies/${movie.id.toString()}`}
                        state={{ from: location }}
                    >{movie.title}</Link></li>
                })}
            </ul>
        </>
    )
}

export default MoviesPage