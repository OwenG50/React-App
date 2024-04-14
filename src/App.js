import logo from './logo.svg';
import './App.css';
import PittCenter from "./Pitt Center.jpg";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/TestPages (DO NOT USE THESE)/SignIn"
import {WS_CheckIn} from "./pages/TestPages (DO NOT USE THESE)/WS_CheckIn"
import {Page2} from "./pages/TestPages (DO NOT USE THESE)/Page2"
import {Page3} from "./pages/TestPages (DO NOT USE THESE)/Page3"
import {Page4} from "./pages/TestPages (DO NOT USE THESE)/Page4"
import {Header} from "./components/Universal/Header";
import React, {useState} from 'react';
import userRegister from "./components/Universal/UserRegister";
import UserRegistration from "./components/Universal/UserRegister";
import SignInWithMicrosoft from "./components/Universal/SignInWithMicrosoft";
import WorkStudyHome from './pages/TestPages (DO NOT USE THESE)/WSHomePage';
import WsAddBookForm from './components/Work Study/Ws_AddBook';
import BookListings from "./components/Universal/CreateBookListings";
import Login from "./components/Universal/userLogin";
import Ws_Scan from './components/Work Study/Ws_Scan';
import WS_Scan_Results from './components/Work Study/WS_Scan_Results.js';
import BookDeleteComponent from "./components/Work Study/RemoveBookFromLibrary";
import WSHome from "./components/Student Athlete/Sa_HomeComponent";

function App() {

  return (
    <>
    <nav>
      <Header/>
    </nav>

    <Routes>
      {/* If a Route is not working make sure the name for element is
       the same as the functions export name and not the file itself, the path name can be whatever we want but
       the route name must match */}
      <Route path="/" element={<SignIn></SignIn>}></Route>
      <Route path="/WS_CheckIn" element={<WS_CheckIn></WS_CheckIn>}></Route>
      <Route path="/page2" element={<Page2></Page2>}></Route>
      <Route path="/page3" element={<Page3></Page3>}></Route>
      <Route path="/page4" element={<Page4></Page4>}></Route>
      <Route path="/SignInWithMicrosoft" element={<SignInWithMicrosoft></SignInWithMicrosoft>}></Route>
      <Route path="/register" element={<UserRegistration/>} />
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/WSHomePage" element={<WorkStudyHome></WorkStudyHome>}></Route>
      <Route path="/WS_AddBook.js" element={<WsAddBookForm></WsAddBookForm>}></Route>
      <Route path="/WS_Scan.js" element={<Ws_Scan></Ws_Scan>}></Route>
      <Route path="BookListings" element={<BookListings></BookListings>}></Route>
      <Route path="/WS_Scan_Results.js" element={<WS_Scan_Results></WS_Scan_Results>}></Route>
      <Route path="/RemoveBookFromLibrary.js" element={<BookDeleteComponent></BookDeleteComponent>}></Route>
      <Route path="/SAHome" element={<WSHome></WSHome>}></Route>
    </Routes>

    </>
  );
}

export default App;
