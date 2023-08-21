
import '../Navbar/NavV1.css';
import logo from  "../../Images/AppLogo.png" ;
import {Link} from 'react-router-dom';
export const NavV1=()=>
{
    return(<>
   <span className="container-for-nav">
        <span className="logo">
            <img src={logo}/>
        </span>
        <span className="home">
       
            <li><Link to="/" >Home</Link> </li>
        </span>
        <span className="farmlog">
        <li><Link to="home/Farmerlogin">Farmer Login</Link> </li>
        </span>
        <span className="complog">
        <li><Link to="home/Companylogin">Company Login</Link> </li>
        </span>
        <span className="abou">
        <li><Link to="/about">About Us</Link> </li>
        </span>



    </span>
    
    </>)
}