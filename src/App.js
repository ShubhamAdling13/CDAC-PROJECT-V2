import * as React from 'react';
import {Routes , Route, BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';
import { DashV1 } from "./Components/Dashboard/Dashv1";
import { FLogin } from './Components/Farmer/FLogin';

import { CLogin } from './Components/Company/CLogin';
import { CRegister } from './Components/Company/CRegister';
import { FRegister } from './Components/Farmer/FRegister';
import { FDash } from './Components/Farmer/FDash';
import { FDailyReport } from './Components/Farmer/FDailyReport';
// import { DarkModeToggle } from './Components/Features/Darkmode';
import { FProblemSuggestion } from './Components/Farmer/FProblemSuggestion';
import { Fdata } from './Components/Farmer/FarmerData';
import UserProfileCard from './Components/Farmer/UserProfileCard';
import { FarmerDetails } from './Components/Company/FarmerDetails';

import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
import './Components/Navbar/NavV2.css';
import logo from  "./Images/AppLogo.png" ;
import { About } from './Components/Dashboard/About';
import { CDash } from './Components/Company/CDash';
import { CreateBatch } from './Components/Farmer/CreateBatch';
import { Dailyreportoptions } from './Components/Farmer/Dailyreportoptions';



function App() {
  // Use state to manage authorization
       
 
  return (  <div className="App">
  <Router>
  

<span className="container-for-nav">
    <span className="logo">
        <img src={logo} alt='logoo'/>
    </span>
    <span className="home">
   
        <li><button onClick={()=>{document.getElementById("hh").click()}}>Home </button> </li>
    </span>
    <span className="farmlog">
    <li><button onClick={()=>{document.getElementById("fldd").click()}}>Farmer Login</button> </li>
    </span>
    <span className="complog" id='nav-complog'>
    <li><button onClick={()=>{document.getElementById("cldd").click()}}> Company Login</button></li>
    </span>
    <span className="abou">
    <li><button onClick={()=>{document.getElementById("abtl").click()}}>About Us</button> </li>
    </span>
    <span className='logout'>
     <li> <button onClick={()=>{document.getElementById("lgt").click()}}>Logout</button></li>
     </span>
     <Link to="/" id='hh' ></Link>
     <Link to="home/Farmerlogin" id='fldd'> </Link>
            <Link to="home/Companylogin"  id='cldd' ></Link> 
     <Link to="/about" id='abtl' ></Link> 
     <Link to="/" onClick={()=>{localStorage.clear()}}  id='lgt'> </Link>

</span> 



    <Routes>
      <Route path="/"  element={<DashV1 />} />
      <Route path="/home/Farmerlogin" element={<FLogin />} />
      <Route path="/home/Companylogin" element={<CLogin />} />
      <Route path="/Companylogin/CompanyRegistration" element={<CRegister />} />
      <Route path="/FarmerRegistration" element={<FRegister />} />
      <Route path="/Farmerlogin/dashboard" element={<FDash/> }/>
      <Route path="/Farmerlogin/dashboard/dailyreport" element={<FDailyReport />} />
      <Route path="/Farmerlogin/dashboard/problemsolution" element={<FProblemSuggestion />} />
      <Route path="/Farmerlogin/dashboard/problemsolution/data" element={<Fdata />} />
      <Route path="/Farmerlogin/dashboard/profile" element={<UserProfileCard />} />
      <Route path="/CompanyLogin/CDash/farmersList" element={<FarmerDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/Companylogin/CDash" element={<CDash />} />
      <Route path='/create' element={<CreateBatch/>}/>
      <Route path='/dailyreportoption' element={<Dailyreportoptions/>}/>
    </Routes>
  </Router>
</div> );
}

export default App;
