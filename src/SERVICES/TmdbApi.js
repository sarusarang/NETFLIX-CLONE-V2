import axios from "axios";

// MOVIE API CONFIG
const TmdbApi = async (apiurl) => {

    const config = {

        method: "GET",
        url: apiurl,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY0MWU0Mjk2ZTEyZjFlYjI4NjQwZThkMDEzMjU2MSIsInN1YiI6IjY2MWY4NjMxZDc1YmQ2MDE2MzMxYjE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PiL4w9zIZJJkJ1w3pG6QSj_xCsR9d9ROsv1ZPuppU54'
        }

    }

   return await axios(config).then((res)=>{return res}).catch((err)=>{return err})



}

export default TmdbApi