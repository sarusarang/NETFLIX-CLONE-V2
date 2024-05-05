import TmdbApi from "./TmdbApi";

// BASE URL 
const Base_Url = "https://api.themoviedb.org/3/"


// Fetch Movie Data

// top rated Tv shows
export const adulttvshows = async () => {

    return await TmdbApi(`${Base_Url}tv/top_rated`)


}

// Popular series
export const Populartvshows = async () => {

    return await TmdbApi(`${Base_Url}tv/popular`)


}

// Airingf series
export const arrivingtoday = async () => {

    return await TmdbApi(`${Base_Url}tv/airing_today`)


}


// discover  movies
export const discovermovies = async () => {

    return await TmdbApi(`${Base_Url}discover/movie`)

}

// Upcoming movies 
export const Upcomingmovies = async () => {

    return await TmdbApi(`${Base_Url}movie/upcoming`)

}

// Top Rated movies
export const Topratedmovies = async () => {

    return await TmdbApi(`${Base_Url}movie/top_rated`)

}

// Trending Rated movies
export const Trendingmovies = async () => {

    return await TmdbApi(`${Base_Url}trending/movie/day`)

}



// Animation Movies

export const getanimatedmovies = async () => {

    return await TmdbApi(`${Base_Url}discover/movie?with_genres=16`)

}


// Animation Series
export const getanimatedseries = async () => {

    return await TmdbApi(`${Base_Url}discover/tv?with_genres=16`)

}


// get search data 
export const searchmultidata = async(data)=>{

    return await TmdbApi(`${Base_Url}search/multi?query=${data}`)

}



// Get Videos of movies
export const getmovievideos = async (id) => {

    return await TmdbApi(`${Base_Url}movie/${id}/videos`)

}



// GET VIDEOS OF SERIES
export const getseriesvideos = async (id) => {

    return await TmdbApi(`${Base_Url}tv/${id}/videos`)

}