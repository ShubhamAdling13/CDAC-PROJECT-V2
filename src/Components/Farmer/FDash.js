import { Link } from "react-router-dom"
import "../Farmer/FDash.css"
import fdash from "../../Images/farmdash.png";
import { ToastContainer } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
// import { useEffect } from "react";

export const FDash = () => {
  



  return (<>
     
    
    <div>
   <h2>  Farmer Id:{localStorage.getItem("pk")} </h2>
      <div className="main">
        <div className="left-div">
          {/* { localStorage.getItem("uniqueid")} */}
          <img src={fdash} alt="Farm Dashboard" className="imgleft" />
          
        </div>
        <div className="mid-div">
        <span><Link to="/Farmerlogin/dashboard/profile" className="active">Profile</Link></span>
          <span><Link to="/Farmerlogin/dashboard/dailyreport" className="active">Daily Report</Link></span>
          <span><Link to="/Farmerlogin/dashboard/problemsolution" className="active">Problems <br/> & <br/> Suggestions</Link></span>
          <span><Link to="#" className="active">Learn</Link></span>
          <span><Link to="#" className="active">Get Report</Link></span>
        </div>
      </div>
       <ToastContainer/>
    </div>
   
    </>
  );
}
