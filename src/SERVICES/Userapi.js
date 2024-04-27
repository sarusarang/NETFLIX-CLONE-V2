import JsonApi from "./JsonApi";

// URL OF JSON SERVER
const URL = "https://teacher-server-rme1.onrender.com/user"

// PUSHING USER DATA TO THE SERVER
export const userdata =async(data)=>{

   return await JsonApi("POST",URL,data)
   
}

// FETCHING USER DATA FROM THE SERVER
export const getuserdata = async ()=>{

   return await JsonApi("GET",URL,'')

}

// PUSHING USER PROFILE TO THE SERVER
export const pushprofile = async(data,id)=>{

   return await JsonApi("PUT",`${URL}/${id}`,data)


}