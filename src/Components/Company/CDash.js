import { Link } from "react-router-dom"
import "./CDash.css";
import { FarmerDetails } from "./FarmerDetails"
import img1 from "../../Images/AppLogo.png"
import { ToastContainer } from "react-toastify";
 


export const CDash=()=>{
    return(<>

    <div className="Cdash-outerdiv"> 
    
    <div className="Cdash-outerdiv-features"> 
    <Link to="/CompanyLogin/CDash/farmersList" id="getfarmdetbtn"></Link>
    <Link to="/FarmerRegistration" id="dofarmreg"></Link>
    <Link to="/GetFarmerDailyReport" id="fmdalirpt"></Link>
    <span><button onClick={()=>{document.getElementById("dofarmreg").click()}} >Farmer Registration  </button> </span>
    <span><button onClick={()=>{document.getElementById("fmdalirpt").click()}}>Get farmer daily report</button></span>
    <span><button onClick={()=>{document.getElementById("getfarmdetbtn").click()}}> Get farmers list</button></span>
   <span> <button > Get customers list </button></span>

   </div>

   <div className="Cdash-outerdiv-image"> <h1> {localStorage.getItem("compIdTemp")} </h1> <img src={img1}/></div>

    <ToastContainer/>

   </div>
    </>)
}