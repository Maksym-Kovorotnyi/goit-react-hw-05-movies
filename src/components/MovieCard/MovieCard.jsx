import { getMovieFullInfo } from "Service/API"
import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import css from './MovieCard.module.css'

export const MovieCard = () => {
    const [movie, setMovie] = useState([])
    const { movieId } = useParams()
     const location = useLocation()
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
            <Link
                style={{
                    textDecoration: 'none',
                    color: '#4a4a4a',
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: '#f7f7f7',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease-in-out',
                    marginRight: '16px',
                    marginBottom: '16px',
  }}
                to={location.state?.from ?? '/'}
            >Go back</Link>
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