import axios from "axios";
import { toast } from "react-toastify";

const MY_KEY = "5d690f0bfcc9395ff58e80bfc32ac0d9"
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
    try {
        const promise = await axios.get(`trending/movie/day?api_key=${MY_KEY}`)
        return promise.data.results;
        
    } catch (error) {
       toast('Movies not found')
    }
}

export const getByQuery = async (query) => {
    try {
        const promise = await axios.get(`search/keyword?api_key=${MY_KEY}&query=${query}&page=1`)
        return promise.data.results;
    } catch (error) {
       toast('Movies not found') 
    }
}

export const getMovieFullInfo = async (id)=> {
    try {
        const promise = await axios.get(`movie/${id}?api_key=${MY_KEY}`)
        return promise.data
    } catch (error) {
       toast('Movies not found')  
    }
}

export const getCast = async (id) => {
    try {
        const promise = await axios.get(`/movie/${id}/credits?api_key=${MY_KEY}`)
        return promise.data.cast;
    } catch (error) {
         
    }
}

export const getReviews = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${MY_KEY}`);
        return response.data.results;  
    } catch (error) {
       toast('Movies not found')  
    }
 
}
