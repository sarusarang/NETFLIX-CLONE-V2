import TmdbApi from "./TmdbApi";

// BASE URL 
const Base_Url = "https://api.themoviedb.org/3/"


// TO SEARCH TVSERIES BY ID 
export const getmovie = async()=>{

    return await TmdbApi(`${Base_Url}discover/movie`)

}