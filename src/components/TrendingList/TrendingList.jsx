
import { getTrending } from "components/Service/API"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

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
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}><Link
                        to={`/movies/${movie.id.toString()}`}
                        state={{ from: location }}
                    >{movie.title}</Link></li> 
                })}
            </ul>
        </>
    )
}