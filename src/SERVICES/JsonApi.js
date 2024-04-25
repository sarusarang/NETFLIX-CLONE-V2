import axios from "axios";

const JsonApi = async(reqmethod,apiurl,body)=>{

    const config ={

        method:reqmethod,
        url:apiurl,
        data:body,
        headers:{"Content-type":"application/json"}

    }


   return await axios(config).then((res)=>{return res}).catch((err)=>{return err})

}

export default JsonApi