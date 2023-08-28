
import { useEffect, useState } from "react";
import "./Problmefromfarmer.css"
import axios from "axios";
export const Problmefromfarmer=()=>{
        
     const [probs,setprobs] =useState(JSON.parse(localStorage.getItem("listoffarmprob")));
     const reversedProbs = probs.slice().reverse();
     console.log(probs);
    
    return(<>
     
     <div className="mainprobmlfromfarmer">
        <table>
            <tr> <th>Sr.No</th><th>FarmerId</th><th>BatchId</th><th>Date</th><th>Problem </th> <th> Problem Description</th> <th>Problem Image </th></tr>
          
          { reversedProbs.map(info => (<tr  key={info.srNo}> <td>{info.srNo}</td> <td>{info.farmerId} </td>  <td>{info.batchId}</td> <td>{info.ldtt}</td> <td>{info.selectedProblem}</td> <td>{info.remark}</td> <td>  <img  src={`http://localhost:8080/images/problems/${info.problemImg}`} alt={`Problem ${info.srNo}`} /></td> </tr>))}
        </table>
 
     </div>
    
    
    
    </>)
}