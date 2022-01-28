import React from "react";
import Header from "../dashboard/header";
import Body from "./body";

function Profile(){
    const userAvatarDetails={
        title: ['DashBoard', 'Addrecipe', 'Favourites'],
        url: ['../', '../addRecipe', '../favourite'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
        <Body />
    </div>

}


export default Profile;