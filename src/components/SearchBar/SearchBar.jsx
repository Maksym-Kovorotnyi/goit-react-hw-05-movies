import { getByQuery } from "components/Service/API";
import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import css from './SearchBar.module.css'

export const SearchBar = () => {
    const location = useLocation()
    const [inputValue, setInputValue] = useState(null)
    const [submited, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')
    
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
    const handleInputValue = (e) => {
       setInputValue(e.target.value)
       
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchParams({ query: inputValue })
        setSubmit(true)
    }
    console.log(submited);
    console.log(inputValue);
    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    onChange={handleInputValue} type="text" />
                <button
                    className={css.formBtn}
                    type="submit">Search</button>
            </form>
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