import axios from "axios";
import { useState } from "react"
import "./FarmerDailyRpDisp.css"
export const  FamerDailyRpDisp =()=>{


    const apiUrl= 'http://localhost:8080';
    const[batchId ,setbat] =useState();
    // const[id,setidd]=useState(batchId);
    const[alldatainfo ,setalldatatinfo] =useState([]);
  const getdata =async(e)=>{
      e.preventDefault();     
     await axios.get(`${apiUrl}/getfmdailyreport/${batchId}`).then((result)=>{
        console.log(result.data);
        setalldatatinfo(result.data);
    })

  }
    return(<>
    
     <div id="dilyrpheading">
        <h1> Farmers Daily Report Data</h1>
     </div>

     <div className="getdatabyid">
        <form>
           <table>

             <tr><th>BatchId</th></tr>   
             <tr><td><input type="number" onChange={(e)=>{setbat(e.target.value)}}/></td></tr>
              <tr><th><button onClick={getdata}>Submit</button>  </th> </tr>      

           </table>



        </form>

     </div>
        <div id="dislyrp-datadisplay">
            
        <table> 
            <tr><th>Farmer Id</th><th>Day </th><th>Date </th> <th>BatchId </th><th>FarmerId </th><th>Mort </th><th>Feed Intake</th><th> Body Weight </th></tr>
            
               
               {
                   alldatainfo.map(info =>(
                    <tr>
                          <td> {info.farmerId}  </td>  
                          <td> {info.day} </td> 
                          <td>  {info.date}</td> 
                          <td> {info.batchId} </td> 
                          <td> {info.farmerId} </td> 
                          <td> {info.mort} </td>
                          <td> {info.feedIntake} </td>  
                          <td> {info.bodyWieght} </td> 
                         

                    </tr>
                   ))

               }

              
                 



          
         
         </table>


        </div>
     
          
    
    
    
    
    
    </>)
}