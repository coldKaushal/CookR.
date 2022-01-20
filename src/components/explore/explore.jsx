import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "./explore-heading";
import ExploreBody from "./explore-body"


function Explore(){
    return <div>
        <Header />
        <ExploreHeading />
        <ExploreBody />
    </div>
}


export default Explore;

//a prog is running on cpu total no. of instr= 10mil, avg cycle required = 2.5 and clocl operates at 200mhz, cal tou, and execution time
//an instr set has 3 inst classes a b c, a=1, b=2, c=3, 