import React from "react";
import "../../css/style.css"; 
function Header(){
    return <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>
      

      <a href="signup" className="get-started-btn scrollto">SignUp</a>
      <a href="login" className="get-started-btnl scrollto">Login</a>
    </div>
  </header>
}

export default Header;