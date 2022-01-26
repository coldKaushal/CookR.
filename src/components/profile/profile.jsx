import React from "react";
import Header from "../dashboard/header";

function Profile(){
    const userAvatarDetails={
        title: ['DashBoard', 'Addrecipe', 'Favourites'],
        url: ['../', '../addRecipe', '../favourite']
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
    </div>

}


export default Profile;