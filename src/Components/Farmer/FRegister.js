// import { Link } from "react-router-dom";
import "../Farmer/FRegister.css"
import { useState } from "react";
import { addfarmer } from "../../Api/AllApis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const FRegister=()=>
{
    
    // const validateForm=()=> {
    //     var password = document.getElementById("password").value;
    //     var confirmPassword = document.getElementById("confirmPassword").value;
    //     var passwordMessage = document.getElementsByclassNameName("password-message");
  
    //     if (password.length < 8) {
    //       passwordMessage[0].textContent = "Password should be at least 8 characters long";
    //       passwordMessage[0].classNameList.add("show");
    //       return false;
    //     } else {
    //       passwordMessage[0].classNameList.remove("show");
    //     }
  
    //     if (password !== confirmPassword) {
    //       passwordMessage[1].textContent = "Passwords do not match";
    //       passwordMessage[1].classNameList.add("show");
    //       return false;
    //     } else {
    //       passwordMessage[1].classNameList.remove("show");
    //     }
  
    //     return true;
    //   }
   
       
      const[farmName,setfarmName] = useState("");
      const[gender,setgender] = useState("");
      const[date,setdate] =useState("");
      const[mobileNo,setmobileNo] =useState();
      const[farmAddress,setfarmAddress] =useState("");
      const[farmTaluka,setfarmTaluka] =useState("");
      const[farmDist,setfarmDist] =useState("");
      const[farmState,setfarmState] =useState("");
      const[pincode,setpincode] =useState();
      const[farmerId ,setfarmerId] =useState("");
      const[farmPass, setfarmPass] =useState("");

         const CompIdVar= localStorage.getItem("CompIdTemp");
      const Farmer = {farmName,gender,date,mobileNo,farmAddress,farmTaluka,farmDist,farmState,pincode,farmerId,farmPass };
      
      
      const handlefarminfo = async(e)=>
      {

        e.preventDefault();
        
        for (const key in Farmer) {
          if (Farmer[key] === undefined || Farmer[key] === null || Farmer[key] === '')
           {
            toast.error("kuch to data dal de bhai",toast.POSITION.TOP_RIGHT);
    
            return false;
          }
         else{

         
        console.log(Farmer);
        if( await addfarmer(Farmer))
        {
          console.log(Response.error)
          showToastMessage();
          clearform();
        }
        else{
          toast.error("error bitch",toast.POSITION.TOP_CENTER);
        }

      }
    }


         
           

      }


      const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const clearform = ()=>{
          let a = document.getElementById("rstbtn");
            a.click();
    }


 
    return(<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <div className="fregisterpg">
    <div id="main3"> 
       <div id="outsidef">

        <h2>Farmer Registration Form</h2>
        <form method="post">
          <div className="form-group">
            <label for="farmerName"><i className="fas fa-building"></i> Farmer Name</label>
            <input type="text" className="form-control" id="farmerName" placeholder="Enter Farmer Name" required onChange={(e)=>{setfarmName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="gender"><i className="fas fa-user"></i>Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Gender" required onChange={(e)=>{setgender(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="dateofbirth"><i className="far fa-calendar"></i>  Date Of Birth </label>
            <input type="date" className="form-control" id="farmerEmail" placeholder="Date Of Birth" required onChange={(e)=>{setdate(e.target.valueAsDate)}}/>
          </div>
          <div className="form-group">
            <label for="farmerContact"><i className="fas fa-phone"></i> Farmer Contact</label>
            <input type="tel" className="form-control" id="farmerContact" placeholder="Enter Farmer contact" required onChange={(e)=>{setmobileNo(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="address"><i className="fas fa-map-marker-alt"></i> Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter farmer address" required onChange={(e)=>{setfarmAddress(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="taluka"><i className="fas fa-map-marker-alt"></i>Taluka</label>
            <select onChange={(e)=>{setfarmTaluka(e.target.value)}}>  
              <option >----</option>
              <option>barmati</option>
              <option> indapur</option>
              <option>AhmedNagar</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="district"><i className="fas fa-map-marker-alt"></i> District</label>
            <select onChange={(e)=>{setfarmDist(e.target.value)}}>  
              <option>AhmedNagar</option>
              <option>Pune</option>
              <option>Nashik</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="state"><i className="fas fa-map-marker-alt"></i> State</label>
            <select onChange={(e)=>{setfarmState(e.target.value)}}>  
              <option>Maharashtra</option>
              <option>Madhya Pradesh</option>
              <option>Karnatak</option>
              <option>Gujarat</option>
              <option>Rajsthan</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="pin"><i className="fas fa-map-marker-alt"></i> Pin/Zip Code</label>
            <input type="number" className="form-control" id="pin" placeholder="Enter Pin Code" required onChange={(e)=>{setpincode(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="aadhar"><i className="fas fa-pen"></i> Enter Aadhar Number</label>
            <input type="number" className="form-control" id="aadhar" placeholder="Enter Aadhar No." />
          </div>
          <div className="form-group">
            <label for="seven"><i className="fas fa-image"></i> Upload 7/12 </label>
            <input type="file"  id="seven" placeholder="Upload Photo Here " />
          </div>
          <div className="form-group">
            <label for="eight"><i className="fas fa-image"></i> Upload 8/A </label>
            <input type="file"  id="eight" placeholder="Upload Photo Here " />
          </div>
          <div className="form-group">
            <label for="farmerId"><i className="fas fa-pen"></i> Farmer Id </label>
            <input type="text" className="form-control" id="farmerId" placeholder="Enter Farmer Id " required onChange={(e)=>{setfarmerId(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="password"><i className="fas fa-pen"></i> Enter Password </label>
            <input type="password" className="form-control"  id="password" placeholder="Enter Password " required onChange={(e)=>{setfarmPass(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="confirmpassword"><i className="fas fa-pen"></i> Confirm Password </label>
            <input type="password" className="form-control"  id="confirmpassword" placeholder="confirm Password " required/>
          </div>
          
         

          {/* <!-- <div className="form-group">
            <label for="aboutCompany"><i className="fas fa-info-circle"></i> About Company</label>
            <textarea className="form-control" id="aboutCompany" rows="4" placeholder="Enter information about the company"></textarea>
          </div> --> */}
          <button type="submit" className="submitbtnn" onClick={handlefarminfo}><i className="fas fa-check" ></i > Submit</button>
          
          
          <input type="reset" id="rstbtn"/>
                               <ToastContainer/>
        
        </form>
      </div>

      </div>


      </div>

 

    
    
    
    
    </>)
}