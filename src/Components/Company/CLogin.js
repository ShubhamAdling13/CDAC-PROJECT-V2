import { Link } from "react-router-dom"
import applogo from "../../Images/AppLogo.png"
import "../Company/CLogin.css"
import React ,{ useState } from "react"
import clbgimg from "../../Images/dash.jpg"
import { FarmerDetails } from "./FarmerDetails"
// import {Helmet} from "react-helmet";
export const CLogin = () => {
    
    const [seepassword , setseepassword] = useState(false);
    const seepass = () => {
        console.log(seepassword);
           setseepassword(!seepassword);
    };

    return(<>
{/* 
    <Helmet>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    </Helmet> */}
        <div id="compbodyyy">
        {/* <div id="cbgimg"><img src={clbgimg}/> </div> */}
        <div id="mm">
            <h2 >Company LOGIN</h2>
            <div id="main">
                <img src={applogo} alt="logo" id="im"/>

                Username: <input type="text" className="i" placeholder="Enter Username*"/> 

                Password: <input type={ seepassword ? "text" : "password"} className="i" id="pass" placeholder="Enter Password*"/> 

                <input type="checkbox" id="chk"  onChange={seepass}/>Show Password 
                
                {/* <input type="button" value="Sign In" id="signin" className="i"   onClick={()=>{<FarmerDetails/>}}/> */}
               <button > <Link to="/Companylogin/CDash">   Sign In   </Link> </button>
                Don't have an account ?  <Link to="/Companylogin/CompanyRegistration">Register here</Link>
            </div>
        </div>
        </div>
        
        </>)
}