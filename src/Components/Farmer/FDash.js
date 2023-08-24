import { Link, Navigate } from "react-router-dom"
import "../Farmer/FDash.css"
import fdash from "../../Images/FLOGINIMG.png";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useEffect } from "react";

export const FDash = () => {
  
  useEffect(()=>{
    
    const apiUrl= 'http://localhost:8080';
    
    let id =localStorage.getItem("pk");
    axios.get(`${apiUrl}/Getfarm/${id}`).then((resp)=>{
        console.log(resp);
        localStorage.setItem("cboobs",resp.data.compIdTemp);
     
     let farmid =localStorage.getItem("pk");
     let  compid =localStorage.getItem("cboobs");
        const byt ={compid,farmid}

     axios.post(`${apiUrl}/getbatchdetail`,byt).then((resp)=>{
      console.log(resp.data);
      localStorage.setItem("btiddd",resp.data.batchId);
      localStorage.setItem("stbitch",resp.data.batchStatus);
     });
       
    })

},[]);



  return (localStorage.getItem("pk") !== null)?
     
    
    <div>
    <ToastContainer/>
      <div className="fdashmain">
     
        <div className="left-div">
          {/* { localStorage.getItem("uniqueid")} */}
         
          <img src={fdash} alt="Farm Dashboard" className="imgleft" />
          
        </div>
        <div className="mid-div">
        <h2>  Farmer Id:{localStorage.getItem("pk")} </h2>
        <span><Link to="/Farmerlogin/dashboard/profile" className="active">Profile</Link></span>
          <span><Link to="/dailyreportoption" className="active">Daily Report</Link></span>
          <span><Link to="/Farmerlogin/dashboard/problemsolution" className="active">Problems <br/> & <br/> Suggestions</Link></span>
          <span><Link to="#" className="active">Learn</Link></span>
          <span><Link to="#" className="active">Get Report</Link></span>
        </div>
      </div>
      
    </div>
    : <Navigate to="/home/Farmerlogin"/>
   
   
  
}
