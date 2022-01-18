import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {

	return(
	<div>
		<header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
               <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>
      

               <Link to="/SignUp" className="get-started-btn scrollto">SignUp</Link>
               <a href="login.html" className="get-started-btnl scrollto">Login</a>
            </div>
        </header>
    </div>
		);
}


export default Header;