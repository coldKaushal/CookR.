import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "./explore-heading";
import ExploreBody from "./explore-body";
import Footer from "../footer";

function Explore(){
    return <div>
        <Header />
        <ExploreHeading title="Explore" />
        <ExploreBody />
        <Footer />
    </div>
}


export default Explore;
