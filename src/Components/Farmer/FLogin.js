import React, { useState } from "react";
import "../Farmer/FLogin.css";
import applogo from "../../Images/AppLogo.png";

// import {checkloginfarm} from "../../Api/AllApis"
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import flimg from "../../Images/farmdash.png"
import flbg from "../../Images/dash.jpg"
export const FLogin = () => {
  const [showpass, setshowpass] = useState(false);

  const togglepass = () => {
    setshowpass(!showpass);
  };

    
  const apiUrl= 'http://localhost:8080';

  const [farid,setusn] =useState("");
  const[farpass,setpass]=useState("");

  const obfarmer={farid,farpass};

  const handleinfo= async(e)=>{
    e.preventDefault();

  //  const res= await checkloginfarm(obfarmer).then((resp)=>{resp.data } )
     
   return await axios.post(`${apiUrl}/FarmerLogin`,obfarmer).then((response)=>{
    console.log(response.data);

     if(response.data===true)  
    {
      localStorage.setItem("pk",farid);
      setTimeout(function(){console.log(obfarmer);   toast.success("Login SUCCESSFUL")} ,1000);
    
      // toast.success("Login SUCCESSFUL");
      document.getElementById("llo").click();
         
     
       
       
      }
     else
      {
        toast.error("Login Unsuccesfull",toast.POSITION.BOTTOM_RIGHT);
          
        document.getElementById("llo1").click();
        
      }
 })
     

    
  }


  return (
     
    <div id="flbodyyy">
      <div id="flbg"><img src={flbg}/> </div>
      <ToastContainer/>
  
     

      <div id="mm">
        <h2 className="login-heading">FARMER LOGIN</h2>
        <div id="main" className="login-form">
          <img src={applogo} alt="logo" id="im" className="logo-image" />
          <br />
          <form >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="i"
              placeholder="Enter Username*"  onChange={(e)=>{setusn(e.target.value)}}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type={showpass ? "text" : "password"}
              id="password"
              className="i"
              placeholder="Enter Password*"  onChange={(e)=>{setpass(e.target.value)}}
            />
            <br />
            <input
              type="checkbox"
              id="chk"
              onChange={togglepass}
            />
            <label htmlFor="chk">Show Password</label>
            <button id="signinn" className="i" onClick={handleinfo}>Sign In
            </button>
            <p className="registration-text">

            <Link to="/Farmerlogin/dashboard" id="llo" style={{display:"none"}} > a </Link>
            <Link to= "/home/Farmerlogin" id="llo1" style={{display:"none"}}>b</Link>
               
             
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
