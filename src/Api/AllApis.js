import axios from "axios";
// import { toast } from "react-toastify";
// import { us} from "react-router-dom";

// const apiUrl = "http://localhost:8080/Companylogin/CompanyRegistration";

const apiUrl ="http://localhost:8080";
// const apiUrl= 'http://192.168.29.83:8080';



export const  addCompany = async(data)=>
{
    try{
     return await axios.post(`${apiUrl}/CompanyRegistration`,data)
       
    }
    catch(error)
    {
        console.log("error while calling api",error.message);
    }
}


export const getfarmerall = async()=>{
    try{
  
       return await axios.get(`${apiUrl}/FarmerList`)


    }


    catch(error)
    {
        console.log("error while calling api ",error.message);
    }
}


export const  addfarmer = async(data)=>
{
    try{
       return await axios.post(`${apiUrl}/FarmerRegistration`,data)
    }
    catch(error)
    {
        console.log("error while calling api",error.messsage);
    }
}


// export const checkloginfarm = async(data)=>
// {
//    try{
      
//      return await axios.post(`${apiUrl}/FarmerLogin`,data).then((response)=>{
//         console.log(response.data);
//      })

//    }
//    catch(error)
//    {
//     console.log("error calling api ",error.message);
//    }
   
// }
