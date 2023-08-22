import { Link } from "react-router-dom"
import "./CDash.css";
import { FarmerDetails } from "./FarmerDetails"
import img1 from "../../Images/AppLogo.png"
 const send=()=>{
    let s=document.getElementById("getfarmdetbtn");
      s.click();
 }


export const CDash=()=>{
    return(<>

    <div className="Cdash-outerdiv"> 
    
    <div className="Cdash-outerdiv-features"> 
    <span><button onClick={()=>{document.getElementById("dofarmreg").click()}} ><Link to="/FarmerRegistration" id="dofarmreg">Farmer Registration  </Link> </button> </span>
    <span><button>Get farmer daily report</button></span>
    <span><button onClick={send}><Link to="/CompanyLogin/CDash/farmersList" id="getfarmdetbtn"> Get farmers list   </Link> </button></span>
   <span> <button> Get customers list </button></span>

   </div>

   <div className="Cdash-outerdiv-image"><img src={img1}/></div>



   </div>
    </>)
}