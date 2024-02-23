import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        
        <nav className="navBar">
            
        <NavLink exact className= "ALL"to="/About">About Us</NavLink>
        <NavLink exact className="ALL" to="/Contact">Key</NavLink>
        <NavLink exact  className="ALL" to="Service">Service</NavLink> 
        <NavLink exact  className= "ALL" to="/feaxois">useEffect</NavLink>    
        <NavLink exact className="ALL" to='/Loading'>Loading</NavLink> 
        <NavLink exact className='ALL' to='/Nameform'>Nameform</NavLink>
        <NavLink exact className='ALL' to='/Reducer'>Reducer</NavLink>
        <NavLink exact className='ALL' to='/Calluse'>useCallback</NavLink>
        </nav>
      
        
        </>
    )
}


export default Navbar