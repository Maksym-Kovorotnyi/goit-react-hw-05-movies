import { getByQuery } from "components/Service/API";
import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const SearchBar = () => {
    const location = useLocation()
    const [submited, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')
    
    useEffect(() => {
        setSubmit(true)
       
    }, [])

    useEffect(() => {
        if (submited === true) {
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
    const handleInputValue = (e) => {
       setSearchParams({ query: e.target.value })
       
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