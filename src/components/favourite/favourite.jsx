import React from "react";
import Header from "../dashboard/header";

function Favourite(){
    const userAvatarDetails={
        title: ['DashBoard', 'Profile', 'Addrecipe'],
        url: ['../', '../profile', '../addRecipe']
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
    </div>

}


export default Favourite;