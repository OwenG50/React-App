import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/TestPages/SignIn"
import {WS_CheckIn} from "./pages/TestPages/WS_CheckIn"
import {Page2} from "./pages/TestPages/Page2"
import {Page3} from "./pages/TestPages/Page3"
import {Page4} from "./pages/TestPages/Page4"
import {Header} from "./components/Universal/Header";
import React, {useState} from 'react';
import userRegister from "./components/Universal/UserRegister";
import UserRegistration from "./components/Universal/UserRegister";
import SignInWithMicrosoft from "./components/Universal/SignInWithMicrosoft";

function App() {

  return (
    <>
    <nav>
      <Header/>
      <ul>
        <li>
          <Link to="/">Home </Link> 
          <Link to="/WS_CheckIn">WsCheckIn </Link> 
          <Link to="/page2">Login Test</Link>
          <Link to="/page3">Add Book Test </Link>
          <Link to="page4">Book Display Test</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<SignIn></SignIn>}></Route>
      <Route path="/WS_CheckIn" element={<WS_CheckIn></WS_CheckIn>}></Route>
      <Route path="/page2" element={<Page2></Page2>}></Route>
      <Route path="/page3" element={<Page3></Page3>}></Route>
      <Route path="/page4" element={<Page4></Page4>}></Route>
      <Route path="/" element={<SignInWithMicrosoft/>} />
      <Route path="/register" element={<UserRegistration/>} />
      <Route path="/page2" element={<userLogin/>} />
    </Routes>

    </>
  );
}

export default App;
