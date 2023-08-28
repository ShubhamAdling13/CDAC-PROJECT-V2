import { Link } from "react-router-dom"
import "./CDash.css";
import { FarmerDetails } from "./FarmerDetails"
import img1 from "../../Images/AppLogo.png"
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
 


export const CDash=()=>{
    const apiUrl = "http://localhost:8080";

  useEffect((
   ()=>{ 
       
    

     if(localStorage.getItem("listoffarmprob"))
     {
        // window.location.reload();
        toast.error("your farmers have some problems ",toast.POSITION.TOP_CENTER);
     }
     else
     {
        window.location.reload();
     }

   }

  ),[]);

    return(<>
     {/* <ToastContainer/> */}
    <div className="Cdash-outerdiv"> 
    
    <div className="Cdash-outerdiv-features"> 
    <Link to="/CompanyLogin/CDash/farmersList" id="getfarmdetbtn"></Link>
    <Link to="/FarmerRegistration" id="dofarmreg"></Link>
    <Link to="/GetFarmerDailyReport" id="fmdalirpt"></Link>
    <Link to ="/farmerproblems" id="probfromfram"></Link>
    
    <span><button onClick={()=>{document.getElementById("dofarmreg").click()}} >Farmer Registration  </button> </span>
    <span><button onClick={()=>{document.getElementById("fmdalirpt").click()}}>Get farmer daily report</button></span>
    <span><button onClick={()=>{document.getElementById("getfarmdetbtn").click()}}> Get farmers list</button></span>
   <span> <button > Get customers list </button></span>
   <span><button onClick={()=>{document.getElementById("probfromfram").click()}}> Problems From Farmers</button></span>

   </div>

   <div className="Cdash-outerdiv-image"> <h1> {localStorage.getItem("compIdTemp")} </h1> <img src={img1}/></div>

    <ToastContainer/>

   </div>
    </>)
}