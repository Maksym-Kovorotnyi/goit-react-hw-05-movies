import { getTrending } from "Service/API"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import css from './TrendingList.module.css'

export const TrendingList = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getTrendingMovies= async()=> {
          const data = await getTrending()
        setMovies(data)    
        }
       getTrendingMovies()    
}, [])

    return (
        <>
            <ul className={css.list}>
                {movies.map(movie => {
                    return <li className={css.item} key={movie.id}><Link
                        to={`/movies/${movie.id.toString()}`}
                        state={{ from: location }}
                    >{movie.title}</Link></li> 
                })}
            </ul>
        </>
    )
}