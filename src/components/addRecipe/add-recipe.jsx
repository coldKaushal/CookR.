import React from "react";
import Header from "../dashboard/header";

function AddRecipe(){
    const userAvatarDetails={
        title: ['DashBoard', 'Profile', 'Favourites'],
        url: ['../', '../profile', '../favourite']
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
    </div>

}


export default AddRecipe;