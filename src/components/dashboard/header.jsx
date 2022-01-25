import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import UserAvatar from "./user-avatar";



function Header() {


  let navigate = useNavigate();
  function navigateSignup() {
    navigate("./signup");
  }
  function navigateLogin() {
    navigate("./login");
  }



  const [status, updateStatus] = React.useState(-1);

  try {
    const User = JSON.parse(localStorage.getItem('user'));
    console.log(User);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", User.username);
    urlencoded.append("password", User.password);

    fetch('http://localhost:4000/login', { method: 'POST', headers: myHeaders, body: urlencoded }).then(function (response) {

      return response;
    }).then(result => {
      updateStatus(result.status);
      return result;

    });
  } catch (error) {
    console.log(error);
  }
  console.log(status);

  return <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>

      {status==200?<UserAvatar />: <div>
        <a onClick={navigateSignup} className="get-started-btn scrollto">SignUp</a>
        <a onClick={navigateLogin} className="get-started-btnl scrollto">Login</a>
      </div>}

    </div>
  </header>
}

export default Header;