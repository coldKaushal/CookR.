import React from "react";
import { useNavigate } from "react-router-dom";
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
    return <button onClick={logout}>log out</button>
}

export default UserAvatar;