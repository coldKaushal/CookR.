import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "../explore/explore-heading";
import SearchBar from "./search-bar";


function Search(){
    return(
        <div>
        <Header />
        <ExploreHeading title="Search recipes by ingredients!!" />
        <SearchBar />
        </div>
    );
}


export default Search;