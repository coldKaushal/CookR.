import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css"; 
function Header(){
  let navigate = useNavigate();
    function navigateSignup(){
      navigate("./signup");
    }
    function navigateLogin(){
      navigate("./login");
    }
    return <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>
      

      <a onClick={navigateSignup} className="get-started-btn scrollto">SignUp</a>
      <a onClick={navigateLogin} className="get-started-btnl scrollto">Login</a>
    </div>
  </header>
}

export default Header;