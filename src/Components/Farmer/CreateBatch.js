import axios from "axios";
import { useState } from "react"

export const CreateBatch=()=>{

    const apiUrl= 'http://localhost:8080';
   const [startDate,setstartdate] =useState("");
   const [totalBirds,settotalbirds] =useState("");
   const [batchStatus,setbactchstateus] =useState(true);
    const farmerId = localStorage.getItem("pk");
    const companyId = localStorage.getItem("cboobs");
   const batchdata ={ startDate ,totalBirds,batchStatus,farmerId,companyId};

   const sendbatchreg =async(e)=>{
    e.preventDefault();
        console.log(batchdata);
      await axios.post(`${apiUrl}/batchregister`,batchdata).then((resp)=>{

        console.log(resp.data);
      })

   }

    return(<>
     <form >
   <table>
   
      <tr><th>Start date</th><th>TOtal birds</th><th>status</th></tr>
      <tr><td><input type="date" onChange={(e)=>{setstartdate(e.target.value)}}/></td>
      <td><input type="number" onChange={(e)=>{settotalbirds(e.target.value)}}/></td>
      <td><select onChange={(e)=>{setbactchstateus(e.target.value)}}><option value={true}>Started</option></select></td></tr>
          <tr><td><button type="submit"  onClick={sendbatchreg}>Submit data</button></td></tr>
  
   </table>
   </form>
    
    
    
    </>)
}