//import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/dashboard/header";
import Hero from "./components/dashboard/hero";
import Trending from "./components/dashboard/trending";
import Footer from "./components/footer";
import BackToTop from "./components/dashboard/back-to-top";

//TODO: Fix BackToTop button

function App() {
  return <div>

    <Header />
    <Hero />
    <Trending />
    <Footer />
    <BackToTop />    
  </div>
}

export default App;
