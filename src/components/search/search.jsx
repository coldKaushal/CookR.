import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "../explore/explore-heading";
import SearchBody from "./search-body";
import Footer from "../footer";

function Search(){
    const userAvatarDetails={
        title: ['Profile', 'Addrecipe', 'Favourites'],
        url: ['../profile', '../addRecipe', '../favourite'],
        homePath: "../"
      }
    return(
        <div>
        <Header userAvatarDetails={userAvatarDetails}/>
        <ExploreHeading title="Search recipes by ingredients!!" />
        <SearchBody />
        <Footer />
        </div>
    );
}


export default Search;