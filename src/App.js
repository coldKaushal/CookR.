//import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/dashboard"
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Explore from "./components/explore/explore";
import Search from "./components/search/search";


//TODO: Fix BackToTop button

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<DashBoard/>}>

    </Route>
    <Route path="/signup" element={<Signup/>}>

    </Route>
    <Route path="/login" element={<Login />}>

    </Route>
    <Route path="/explore" element={<Explore />}>

    </Route>
    <Route path="/search" element={<Search />}>

    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
