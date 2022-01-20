import React from "react";
import Header from "./header";
import Hero from "./hero";
import Trending from "./trending";
import Footer from "../footer";
import BackToTop from "./back-to-top";
import "../../css/style.css"; 


//TODO: Fix BackToTop button

function Dashboard() {
  return <div>
    <Header />
    <Hero />
    <Trending />
    <Footer />
    <BackToTop />    
  </div>
}

export default Dashboard;