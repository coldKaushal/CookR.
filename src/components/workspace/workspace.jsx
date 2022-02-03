import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "../explore/explore-heading";
import Favourite from "./favourites";


function Workspace(){
    const userAvatarDetails={
        title: ['Profile', 'Dashboard'],
        url: ['../profile', '../'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails} />
        <ExploreHeading title="Workspace" />
        <Favourite />
    </div>
}

export default Workspace;