import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "../explore/explore-heading";
import SearchBody from "./search-body";
import Footer from "../footer";

function Search(){
    return(
        <div>
        <Header />
        <ExploreHeading title="Search recipes by ingredients!!" />
        <SearchBody />
        <Footer />
        </div>
    );
}


export default Search;