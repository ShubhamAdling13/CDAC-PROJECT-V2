
import { Link } from "react-router-dom"
export const Dailyreportoptions=()=>{
    return(<>
    
    <button onClick={()=>{document.getElementById("crtb").click();}}> Create batch   </button>

    <button onClick={()=>{document.getElementById("dlrp").click();}}> Fill data </button>
    
    <Link to={"/Farmerlogin/dashboard/dailyreport"} id="dlrp"></Link>
    <Link to={"/create"} id="crtb"></Link>
    </>)
}