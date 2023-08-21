import "../Dashboard/Dashv1.css"

import cuteEgg from "../../Images/egg.png";
// import { useState } from "react";

export const DashV1 =()=>
{
  



    return(<>
 
    
    <div className="maindash">
       

        <div id="slogan">
          <h1 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bolder', fontFamily: 'Times New Roman, Times, serif' }}>
            POULTRY BOOK
          </h1>
          <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontWeight: '100', color: 'rgb(80, 92, 255)', border: '1px ridge' }}>
            "Unlock the Potential of <br/> Your Poultry Farm with <br/> Smart Management."
          </h2>
        </div>

        <div className="slideshow-container">
            <img src={cuteEgg} id="egg" alt="ANDA" />
           </div>

      </div>
    
    
    </>)
}