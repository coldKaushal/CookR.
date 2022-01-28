import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "./explore-heading";
import ExploreBody from "./explore-body";
import Footer from "../footer";

function Explore(){
    const userAvatarDetails={
        title: ['Profile', 'Addrecipe', 'Favourites'],
        url: ['../profile', '../addRecipe', '../favourite'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
        <ExploreHeading title="Explore" />
        <ExploreBody />
        <Footer />
    </div>
}


export default Explore;

