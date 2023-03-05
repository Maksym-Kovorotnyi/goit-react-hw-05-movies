import { MovieCard } from "components/MovieCard/MovieCard"
import { Link, Outlet, useLocation} from "react-router-dom"

export const MovieInfoPage = () => {
    const location = useLocation()
    
    return (
        <>
            <Link
                to={location.state.from}
            >Go back</Link>
            <MovieCard />
            <Link
            to="cast"
                state={location.state ?? '/'}>Cast</Link>
            <Link
                to='reviews'
                state={location.state ?? '/'}>Reviews</Link>
             <Outlet />
        </>
    )
}