import { Link } from "react-router-dom"
import { FarmerDetails } from "./FarmerDetails"
 const send=()=>{
    let s=document.getElementById("getfarmdetbtn");
      s.click();
 }


export const CDash=()=>{
    return(<>
    
    <button onClick={()=>{document.getElementById("dofarmreg").click()}} ><Link to="/FarmerRegistration" id="dofarmreg">Farmer Registration  </Link> </button>
    <button>Get farmer daily report</button>
    <button onClick={send}><Link to="/CompanyLogin/CDash/farmersList" id="getfarmdetbtn"> Get farmers list   </Link> </button>
   <button> Get customers list </button>
   {/* <button></button>     */} 
    </>)
}