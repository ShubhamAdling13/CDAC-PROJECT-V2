import { Link } from "react-router-dom"
import applogo from "../../Images/AppLogo.png"
import "../Company/CLogin.css"
import React ,{ useState } from "react"
import clbgimg from "../../Images/dash.jpg"
import { FarmerDetails } from "./FarmerDetails"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
// import {Helmet} from "react-helmet";
export const CLogin = () => {
    
    const [seepassword , setseepassword] = useState(false);
    const seepass = () => {
        console.log(seepassword);
           setseepassword(!seepassword);
    };

    const apiUrl= 'http://localhost:8080';
    const[compid ,setcompid]= useState("");
    const [comppass,setcomppass]=useState("");
   
    const CompLgdet ={compid,comppass};

   const handliecomploginfo=async()=>{
              
     
       
   
     const resp =    await axios.post(`${apiUrl}/Companylogin`,CompLgdet)
        console.log(resp.data);
        
        if(resp.data===true)
        {
              localStorage.setItem("CompIdTemp",setcompid);
               document.getElementById("cmpdsh").click();
        }
        else
        {
            document.getElementById("cmplgn").click();
            toast.error("Login Failed",toast.POSITION.TOP_CENTER);
        }
   
}



    return(<>
{/* 
    <Helmet>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    </Helmet> */}
        <div id="compbodyyy">
        {/* <div id="cbgimg"><img src={clbgimg}/> </div> */}
        <div id="compdasmm">
        
        <h2>Company LOGIN</h2>
            <div id="main">
            {/* <h2 >Company LOGIN</h2> */}
                <img src={applogo} alt="logo" id="im"/>

                Username: <input type="text" className="i" placeholder="Enter Username*" onChange={(e)=>{setcompid(e.target.value)}}/> 

                Password: <input type={ seepassword ? "text" : "password"} className="i" id="pass" placeholder="Enter Password*" onChange={(e)=>{setcomppass(e.target.value)}}/> 

                <input type="checkbox" id="chk"  onChange={seepass}/>Show Password 
                
                {/* <input type="button" value="Sign In" id="signin" className="i"   onClick={()=>{<FarmerDetails/>}}/> */}
               <button  onClick={handliecomploginfo}> <Link >   Sign In   </Link> </button>
                Don't have an account ?  <Link to="/Companylogin/CompanyRegistration">Register here</Link>

                <Link to="/home/Companylogin " id="cmplgn" style={{display:"none"}}>sg</Link>
                <Link to ="/Companylogin/CDash" id="cmpdsh" style={{display:"none"}}>dash</Link>
                <ToastContainer/>
            </div>
        </div>
        </div>
        
        </>)
}