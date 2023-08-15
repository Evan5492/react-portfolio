import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const currentPage = useLocation().pathname;
    return (
        <div className="nav">
        <ul className="">
            <li><Link to="/about"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                About Me
                </Link></li> 

         <li><Link to="/Projects"
            className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>
                Projects
                </Link></li>    


          <li><Link to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact Me
                </Link></li>   

        
           <li><Link to="/Resume"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                Resume
                </Link></li>        

        </ul>
       </div>
    );
};

export default Nav;