import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import {SignIn} from "./components/Universal/SignIn"
import {WS_CheckIn} from "./components/Work Study/WS_CheckIn"
import {Header} from "./components/Universal/Header";
import React, {useState} from 'react';
import UserRegistration from "./components/Universal/UserRegister";
import SignInWithMicrosoft from "./components/Universal/SignInWithMicrosoft";
import WorkStudyHome from './components/Work Study/WSHomePage';
import WsAddBookForm from './components/Work Study/Ws_AddBook';
import BookListings from "./components/Universal/CreateBookListings";
import Login from "./components/Universal/userLogin";
import Ws_Scan from './components/Work Study/Ws_Scan';
import WS_Scan_Results from './components/Work Study/WS_Scan_Results.js';
import BookDeleteComponent from "./components/Work Study/RemoveBookFromLibrary";
import SAHome from "./components/Student Athlete/Sa_HomeComponent";

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
      <Route path="/SignInWithMicrosoft" element={<SignInWithMicrosoft></SignInWithMicrosoft>}></Route>
      <Route path="/register" element={<UserRegistration/>} />
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/WSHomePage" element={<WorkStudyHome></WorkStudyHome>}></Route>
      <Route path="/WS_AddBook.js" element={<WsAddBookForm></WsAddBookForm>}></Route>
      <Route path="/WS_Scan.js" element={<Ws_Scan></Ws_Scan>}></Route>
      <Route path="BookListings" element={<BookListings></BookListings>}></Route>
      <Route path="/WS_Scan_Results.js" element={<WS_Scan_Results></WS_Scan_Results>}></Route>
      <Route path="/RemoveBookFromLibrary.js" element={<BookDeleteComponent></BookDeleteComponent>}></Route>
      <Route path="/SAHome" element={<SAHome></SAHome>}></Route>
    </Routes>

    </>
  );
}

export default App;
