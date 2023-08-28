import { Link } from "react-router-dom"
import applogo from "../../Images/AppLogo.png"
import "../Company/CLogin.css"
import React ,{ useState } from "react"
import clbgimg from "../../Images/dash.jpg"
import { FarmerDetails } from "./FarmerDetails"
import axios from "axios"
import clgnpgimg from "../../Images/6101100.png"
import { ToastContainer, toast } from "react-toastify"
// import {Helmet} from "react-helmet";
export const CLogin = () => {
    //  localStorage.removeItem("compIdVar");
    // localStorage.setItem("compIdVar",null);
    
    const [seepassword , setseepassword] = useState(false);
    const seepass = () => {
        console.log(seepassword);
           setseepassword(!seepassword);
    };

    const apiUrl = "http://localhost:8080";
    // const apiUrl= 'http://192.168.29.83:8080';
    const[compid ,setcompid]= useState("");
    const [comppass,setcomppass]=useState("");
   
    const CompLgdet ={compid,comppass};
   const bad =6;
   const handliecomploginfo=async()=>{
              
     
       
   try{
     const resp =    await axios.post(`${apiUrl}/Companylogin`,CompLgdet)
        console.log(resp.data);
        
        if(resp.data===true)
        {
            localStorage.setItem("disha",bad)
              localStorage.setItem("compIdVar",compid);
              
              const companyId = localStorage.getItem("compIdVar");
              const obje = {companyId};
         
              axios.post(`${apiUrl}/getfarmerproblemslist`,obje).then((res)=>{
         
         
                   localStorage.setItem("listoffarmprob",JSON.stringify(res.data));
         
         
                  
              })



               document.getElementById("cmpdsh").click();
               setTimeout(function(){  toast.success("Login SUCCESSFUL")} ,1000);
        }
        else
        {
            document.getElementById("cmplgn").click();
            toast.error("Login Failed",toast.POSITION.TOP_CENTER);
        }
    }
    catch(error)
    {
         toast.error("First Start backend server",toast.POSITION.TOP_CENTER);
    }
}



    return(<> 

    <div className="compmainbodyy"> 
                 <div className="compbodyyy-heading">
                   <h2 id="compbodyyy-h2" >Company LOGIN</h2>
                   </div>
        <div id="compbodyyy">
       
            <div id="compbodyyy-lgnimg"><img src={clgnpgimg} /></div>
    
        <div id="compdasmm">
        
        
            <div id="main">
            {/* <h2 >Company LOGIN</h2> */}
                <img src={applogo} alt="logo" id="im"/>

                Username: <input type="text" className="i" placeholder="Enter Username*" onChange={(e)=>{setcompid(e.target.value)}}/> 

                Password: <input type={ seepassword ? "text" : "password"} className="i" id="pass" placeholder="Enter Password*" onChange={(e)=>{setcomppass(e.target.value)}}/> 

                <input type="checkbox" id="chk"  onChange={seepass}/>Show Password 
                
                {/* <input type="button" value="Sign In" id="signin" className="i"   onClick={()=>{<FarmerDetails/>}}/> */}
               <button  onClick={handliecomploginfo}> <Link style={{color:"white"}}>   Sign In   </Link> </button>
                Don't have an account ?  <Link to="/Companylogin/CompanyRegistration">Register here</Link>

                <Link to="/home/Companylogin " id="cmplgn" style={{display:"none"}}>sg</Link>
                <Link to ="/Companylogin/CDash" id="cmpdsh" style={{display:"none"}}>dash</Link>
                
            </div>
        </div>
        <ToastContainer/>
        </div>
        

        </div>
        </>)
}