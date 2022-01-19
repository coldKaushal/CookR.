//import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/dashboard"
import Signup from "./components/signup/signup";
//TODO: Fix BackToTop button

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<DashBoard/>}>

    </Route>
    <Route path="/signup" element={<Signup/>}>

    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
