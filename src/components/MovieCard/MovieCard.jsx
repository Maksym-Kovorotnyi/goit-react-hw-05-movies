import { getMovieFullInfo } from "components/Service/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from './MovieCard.module.css'

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
            <div className={css.container}>
                <img
                    className={css.poster}
          src={poster_path&&`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="200"
                />
                <div className={css.infoContainer}>
                    <span className={css.title}>{title}</span>
                    <span className={css.releaseDate}>{release_date}</span>
                    <p className={css.userScore}>User Score: {Math.round(vote_average * 10)}%</p>
                    <p className={css.reviewTitle}>Overview</p>
                    <p className={css.review}>{overview}</p>
                    <p className={css.genre}>Genres</p>
                    <p className={css.genreList}>
                        {genres&&genres.map(genre => (
                            <span className={css.genreItem} key={genre.id}>{genre.name}</span>)
                        )}
                    </p>
                </div>
            </div>
        </>
    )
} 