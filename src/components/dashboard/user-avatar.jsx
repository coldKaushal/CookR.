import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/user-avatar.css";
function UserAvatar() {
    const navigate = useNavigate();
    const [status, updateStatus] = React.useState(-1);
    function logout() {
       
        const User = JSON.parse(localStorage.getItem('user'));
        var myHeaders = new Headers();
        
        var urlencoded = new URLSearchParams();
        urlencoded.append('username', User.username);
        urlencoded.append('password', User.password);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("http://localhost:4000/logout", requestOptions)
            .then(response => response)
            .then((result)=>{
                console.log(result);
                if(result.status==200){
                    console.log("logged out successfully");
                    localStorage.removeItem('user');
                    window.location.reload();
                }
            } )
            .catch(error => console.log('error', error));
    }
    
    return <div class="btn-group user-avatar">
    <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
    </button>
    <div class="dropdown-menu dropdown-btn" >
      <a class="dropdown-item" href="#">Profile</a>
      <a class="dropdown-item" href="#">Add recipe</a>
      <a class="dropdown-item" href="#">Favourites</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" onClick={logout}>Logout</a>
    </div>
  </div>
}

export default UserAvatar;