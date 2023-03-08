import { getReviews } from "Service/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const Reviews = () => {
   const [Review, setReview] = useState(null);
  const {movieId} = useParams();  
    
    
    useEffect(() => {
        const getREviewInfo = async () => {
            try {
        const data = await getReviews(movieId)
        setReview(data)  
            } catch (error) {
              console.log('error');  
            }
             
        }
       getREviewInfo() 
    }, [movieId])
    
    
  
    return (
    <>
      {Review && (
        <ul>
          {Review.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews