import { getMovieFullInfo } from "components/Service/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieCard = () => {
    const [movie, setMovie] = useState([])
    const {movieId} = useParams()

    useEffect(() => {
        const getMovieById = async() => {
            const movie = await getMovieFullInfo(movieId)
            setMovie(movie)
        }
       getMovieById()
}, [movieId])

    const { poster_path, title, vote_average, release_date, overview, genres } = movie;
    return (
        <>
            <div>
                <img
          src={poster_path&&`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="200"
                />
                <div >
                    <span>{title}</span>
                    <span>{release_date}</span>
                    <p>User Score: {Math.round(vote_average * 10)}%</p>
                    <p>Overview</p>
                    <p>{overview}</p>
                    <p>Genres</p>
                    <p>
                        {genres&&genres.map(genre => (
                            <span key={genre.id}>{genre.name}</span>)
                        )}
                    </p>
                </div>
            </div>
        </>
    )
} 