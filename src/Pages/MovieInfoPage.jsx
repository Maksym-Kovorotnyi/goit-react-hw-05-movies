import { MovieCard } from "components/MovieCard/MovieCard"
import { Link, Outlet, useLocation} from "react-router-dom"

const MovieInfoPage = () => {
   const location = useLocation()
    
    return (
        <>
            <MovieCard />
            <Link
                style={{
                    textDecoration: 'none',
                    color: '#0077c0',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    backgroundColor: '#f5f9ff',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease-in-out',
                    marginRight: '16px',
                    marginBottom: '16px',
  }}
            to="cast"
                state={location.state ?? '/'}>Cast</Link>
            <Link
                style={{
                    textDecoration: 'none',
                    color: '#0077c0',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    backgroundColor: '#f5f9ff',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease-in-out',
                    marginRight: '16px',
                    marginBottom: '16px',
  }}
                to='reviews'
                state={location.state ?? '/'}>Reviews</Link>
            
          <Outlet />
            
        </>
    )
}

export default MovieInfoPage