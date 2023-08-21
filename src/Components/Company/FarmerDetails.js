
import { useEffect, useState } from "react"
import { getfarmerall } from "../../Api/AllApis"
import kanao from "../../Images/1011170.png"
import "./FarmerDetails.css"
export const FarmerDetails=()=>{

    const [farmdataa ,setfarmdataa]= useState([]);
         
    useEffect(()=>{
              
        getfarmerdetails();
         
    },[]);

    const  getfarmerdetails= async()=>{
      
        let res = await getfarmerall() ;
        console.log(res);
        setfarmdataa(res.data)

    }


    return(<>
        <div id="mainb"> 
        {/* <img src={kanao}/> */}
         <table> 
            <tr><th>Farmer Id</th><th>Farmer Name </th><th>Gender </th> <th>Date of Birth </th><th>Mobile no </th><th>Farmer Address </th><th>District</th><th> Pincode </th></tr>
            
               
               {
                   farmdataa.map(info =>(
                    <tr>
                          <td> {info.farmerId}  </td>  
                          <td> {info.farmName} </td> 
                          <td>  {info.gender}</td> 
                          <td> {info.date} </td> 
                          <td> {info.mobileNo} </td> 
                          <td> {info.farmAddress} </td>
                          <td> {info.farmDist} </td>  
                          <td> {info.pincode} </td> 
                         

                    </tr>
                   ))

               }

              
                 



          
         
         </table>

         </div> 
    
    
    
    
    </>)
}