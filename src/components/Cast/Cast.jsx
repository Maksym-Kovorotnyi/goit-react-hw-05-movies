import { getCast } from "Service/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css'

const Cast = () => {
   const [cast, setCast] = useState(null);
  const {movieId} = useParams();  
    
    
    useEffect(() => {
        const getCastInfo = async () => {
            try {
        const data = await getCast(movieId)
        setCast(data)  
            } catch (error) {
              console.log('error');  
            }
             
        }
       getCastInfo() 
    }, [movieId])
    
    
  
    return (
    <>
      {cast && <ul className={css.list}>
          {cast.map(({ id, profile_path, character, name }) => (
            <li className={css.item} key={id} >
              <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://vaksi.by/design/verona/images/no_image.png'
                }
                alt="name"
                width="100"
              />
              <p className={css.character}>{character}</p>
              <p className={css.name}>{name}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default Cast