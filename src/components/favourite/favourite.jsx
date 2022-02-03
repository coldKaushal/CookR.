import React from "react";
import Header from "../dashboard/header";

function Favourite(){
    const userAvatarDetails={
        title: ['DashBoard', 'WorkSpace'],
        url: ['../', '../workspace'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
    </div>

}


export default Favourite;