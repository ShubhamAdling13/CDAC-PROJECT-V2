

import "./Dailyreportoptions.css"
import { Link } from "react-router-dom"
export const Dailyreportoptions=()=>{
    return (localStorage.getItem("btiddd")!==null&&localStorage.getItem("stbitch")==="true")?
    (
        <div className="Dailyreportoptions-button"> 
        <button onClick={()=>{document.getElementById("dlrp").click();}}> Fill data </button>
        <Link to={"/Farmerlogin/dashboard/dailyreport"} id="dlrp"></Link>
        </div>
    )

    :
    
    (
   

<div className="Dailyreportoptions-button">
<button onClick={()=>{document.getElementById("crtb").click(); }}> Create batch   </button>
<Link to={"/create"} id="crtb"></Link>
</div>
    )
   
    
}