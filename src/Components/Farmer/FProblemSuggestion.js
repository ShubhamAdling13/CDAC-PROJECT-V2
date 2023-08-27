import { useState } from "react";
import "./FProblemSuggestion.css" ;
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export const FProblemSuggestion=()=>
{

  const apiUrl = "http://localhost:8080";
   const[farmerId,setfarmerid]=useState(localStorage.getItem("pk"));
    const[batchId,setbtchud]=useState(localStorage.getItem("btiddd"));
    const[batchNo,setbtchNo]=useState(localStorage.getItem("flbthno"));
    const[companyId,setcompid]=useState(localStorage.getItem("cboobs"));
   const[problemImg,setprobimg]=useState("");
   const [ldtt,setldt] =useState();
   const[selectedProblem,setproblem]=useState();
    const[remark,setremark]=useState("");

 const probdata ={farmerId,batchId,batchNo,companyId,problemImg,ldtt,selectedProblem,remark}; 



   const getFormattedDate = (date) => {
    const inputDate = date ? new Date(date) : new Date();
    const year = inputDate.getFullYear();
    let month = inputDate.getMonth() + 1;
    let day = inputDate.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
};


const manuallySetDate = ldtt;
const formattedManuallySetDate = getFormattedDate(manuallySetDate);


const handleinfo =(e)=>{
     e.preventDefault();
     axios.post(`${apiUrl}/sendproblem`,probdata).then((res)=>{
         console.log(res.data);
         toast.success(res.data,toast.POSITION.TOP_RIGHT);
     })

}
       
        
    return(<>
    <ToastContainer/>
    <div className="fprobsugges"> 
      <div id="prob">
      <h1>Problems</h1>
      <form > 
      <table id="tb1">
        <div id="tbod"> 
       <tr>
          <td>Date</td> <td>Select Problem </td> <td> Remark</td> <td>Upload Photo</td>
       </tr>
       <tr><td><input type="date" onChange={(e)=>{setldt(e.target.valueAsDate)}} value={formattedManuallySetDate}/></td>
       <td> <select onChange={(e)=>{setproblem(e.target.value) }}><option >viral</option> <option>flue</option> <option>Feed stock over</option> <option>Medicines over </option> <option selected>other</option> </select> </td>
       <td><input type="text" onChange={(e)=>{setremark(e.target.value)}}/></td><td><input type="file" onChange={(e)=>{setprobimg(e.target.files[0])}}/>
       <button onClick={(e)=>{
             e.preventDefault();
            
            const formData = new FormData();
            formData.append('file',problemImg);

            axios.post('http://localhost:8080/uploadproblem', formData).then((res)=>{
              setprobimg(res.data);
              toast.success("image uploaded successfully!!",toast.POSITION.TOP_RIGHT);
            })


       }}>Upload</button>  </td></tr>

       <tr> <td colSpan={5}><div className="but"> <input type="submit" className="s1" onClick={handleinfo}/> <input type="reset" className="s1"/> </div> </td> </tr> 
       </div>
      </table>
      </form>
      </div>
        
        <div id="sugges"> 
      <h1>Suggetions from Company </h1>
       <form>
        <table id="tb2">
            <tr><td>Sr.No</td><td>ID</td><td>Date</td><td>Problem</td><td>Solution</td></tr>
            <tr><td></td><td>{}</td><td>{}</td><td> </td><td> </td></tr>
        </table>
       </form>
    
    
      </div>


      </div>
    
    </>)
}