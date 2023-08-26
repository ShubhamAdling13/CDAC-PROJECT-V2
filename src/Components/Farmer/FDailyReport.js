import React, { useState } from "react";
import "./FDailyReport.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const FDailyReport = () => {


  const apiUrl= 'http://localhost:8080';
 const[batchId,setbh] =useState(localStorage.getItem("btiddd"))
 const[farmerId,stfmid] =useState(localStorage.getItem("pk"));
 const[companyId,stecmpidd] =useState(localStorage.getItem("cboobs"));
const[status,setstatus] =useState(localStorage.getItem("stbitch"));
const[batchNo,setbatchno]=useState(localStorage.getItem("flbthno"));

 ////////////////////////////// state for storing famrers daily data =========/////////////////////
 const [date ,setdate]=useState();
 const[day,setday]=useState();
const[mort,setmort]=useState();
const[feedIntake,setfeedintake]=useState();
const[bodyWieght,setbdywt] =useState();

 const endbtob ={batchId,farmerId,companyId};
 const dailyreportdata ={batchId,bodyWieght,companyId,date,day,farmerId,feedIntake,mort,status,batchNo};

 const endbatch=()=>{
        console.log(endbtob)
        axios.put(`${apiUrl}/closebatch`,endbtob).then((res)=>{
          console.log(res.data);
          toast.success("batch ended !!");
        })
         
 }

 const handledailyreportfarmer=(e)=>{
       e.preventDefault();
      console.log(dailyreportdata);

      try{
      axios.post(`${apiUrl}/dailyreportfarmer`,dailyreportdata).then((re)=>{
          
        toast.success("Daily report submitted successfully")
        console.log(re.data);
        
      })
    }
    catch(error)
    {
      toast.error("serverside error");
      console.log(error.message);
    }
 }



  return (
    <div id="whole">
      <ToastContainer/>
      <div id="header">
        <h1>Daily Report</h1>       <div><button onClick={endbatch}>End batch</button> </div>
      </div>
      <div id="content">
        <div id="frm">
          <form>
            <table className="tbl">
              <tr className="tblr1">
                <th><h3> Date</h3></th>
                <th><h3> Age </h3></th>
                <th><h3> Mort </h3></th>
                {/* <th><h3>  Total Mort </h3></th> */}
                {/* <th><h3> Total Stock Available </h3></th> */}
                {/* <th><h3> Min Feed Intake </h3></th> */}
                <th><h3> Actual Feed Intake </h3></th>
                {/* <th><h3> Min Body Weight </h3></th> */}
                <th><h3> Actual Body Weight </h3></th>
                {/* <th><h3>Status of batch </h3></th> */}
              </tr>
              <tr id="tblr2">
                <td>
                  <input type="date" onChange={(e)=>{setdate(e.target.valueAsDate)}} />
                </td>
                <td>
                  <input type="number" onChange={(e)=>{setday(e.target.value)}}/>
                </td>
                <td>
                  <input type="number" onChange={(e)=>{setmort(e.target.value)}} />
                </td>
                <td>
                  <input type="number" onChange={(e)=>{setfeedintake(e.target.value)}}/>
                </td>
                <td>
                  <input type="number"  onChange={(e)=>{setbdywt(e.target.value)}}/>
                </td>
                {/* <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td> */}
                <td>
                  {/* <input type="number" /> */}
                </td>
                {/* <td>
                  <select><option value={true}>open</option><option value={false}>ended</option> </select>
                </td> */}
              </tr>
              <tr>
                <td >
                 
                </td>
              </tr>
            </table>
          </form>
          <div className="btns">
          <button id="subbtn" onClick={handledailyreportfarmer}>Submit</button>
                  <button type="reset" id="resbtn">
                    Clear
                  </button>
                  </div>
        </div>
      </div>
    </div>
  );
};
