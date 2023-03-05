import { getCast } from "components/Service/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
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
      {cast && <ul >
          {cast.map(({ id, profile_path, character, name }) => (
            <li key={id} >
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://vaksi.by/design/verona/images/no_image.png'
                }
                alt="name"
                width="100"
              />
              <p>{character}</p>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
}