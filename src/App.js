import * as React from 'react';
import {Routes , Route, BrowserRouter, Link} from 'react-router-dom';
import './App.css';
import { DashV1 } from "./Components/Dashboard/Dashv1";
import { FLogin } from './Components/Farmer/FLogin';

import { CLogin } from './Components/Company/CLogin';
import { CRegister } from './Components/Company/CRegister';
import { FRegister } from './Components/Farmer/FRegister';
import { FDash } from './Components/Farmer/FDash';
import { FDailyReport } from './Components/Farmer/FDailyReport';
import { DarkModeToggle } from './Components/Features/Darkmode';
import { FProblemSuggestion } from './Components/Farmer/FProblemSuggestion';
import { Fdata } from './Components/Farmer/FarmerData';
import UserProfileCard from './Components/Farmer/UserProfileCard';
import { FarmerDetails } from './Components/Company/FarmerDetails';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './Components/Navbar/NavV1.css';
import logo from  "./Images/AppLogo.png" ;
import { About } from './Components/Dashboard/About';
import { CDash } from './Components/Company/CDash';


function App() {
  

  return (
    <div className="App" >

  
      

      <BrowserRouter > 
        
      <span className="container-for-nav">
        <span className="logo">
            <img src={logo}/>
        </span>
        <span className="home">
       
            <li><Link to="/" >Home</Link> </li>
        </span>
        <span className="farmlog">
        <li><Link to="home/Farmerlogin"> 
                Farmer Login</Link> </li>
        </span>
        <span className="complog">
        <li><Link to="home/Companylogin"  >Company Login</Link> </li>
        </span>
        <span className="abou">
        <li><Link to="/about" >About Us</Link> </li>
        </span>



    </span>


      {/* <NavV1/> */}

     
      {/* <DarkModeToggle/> */}
      <Routes>
     
        <Route path='/' element={<DashV1/>} /> 
        <Route path='home/Farmerlogin' element={<FLogin/>} /> 
        <Route path='home/Companylogin' element={<CLogin/>} /> 
        <Route path='/Companylogin/CompanyRegistration' element={<CRegister/>} /> 
        <Route path='/FarmerRegistration' element={<FRegister/>}/>
        <Route path='/Farmerlogin/dashboard'  element={<FDash/>}/>
        <Route path='/Farmerlogin/dashboard/dailyreport' element={<FDailyReport/>}/>
        <Route path='/Farmerlogin/dashboard/problemsolution' element={<FProblemSuggestion/>}/>
        <Route path='/Farmerlogin/dashboard/problemsolution/data' element={<Fdata/>}/>
        <Route path='/Farmerlogin/dashboard/profile' element={<UserProfileCard/>}/>
         <Route path='/CompanyLogin/CDash/farmersList' element={<FarmerDetails/>} /> 
         <Route path='/about' element={<About/>}/>
         <Route path='/Companylogin/CDash' element={<CDash/>}/>
      </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
