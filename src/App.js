import React, {useState} from "react";

import logo from './logo.svg';
// import './layout.css';
import './index.css'

import Greeting from './component/Greeting'
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import Calculator from './component/Calculator'

import HooksTest1 from './component/HooksTest1'
import UseStateHook from './component/UseStateHook'
import ListComponent from './component/ListComponent'
import ToDo from './component/ToDo'
import IncreamentDecrementExample from './component/IncreamentDecrementExample'
import ComParent from './component/ContextApiExample/ComParent'
import  './component/KeepNoteApp/Main.jsx'
import Register from './component/Register'
import GitHubUserInfo from './component/GithubUsers/Main'
import Navbar from "./component/NavBar";

import { Route, Routes } from 'react-router-dom';
import UseRefHookExample from "./component/UseRefHookExample";

function App() {
  return (
    <>
    
    <Navbar/>
    <Header />
      <Routes>
        <Route path="/" element={<UseStateHook />} />
        <Route path="/ListComponent" element={<ListComponent />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/GitHubUserInfo" element={<GitHubUserInfo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/ComParent" element={<ComParent />} />
        <Route path="/IncreamentDecrementExample" element={<IncreamentDecrementExample />} />

        <Route path="/London" element={<Register />} />
        <Route path="/Paris" element={<ComParent />} />
        <Route path="/Tokyo" element={<IncreamentDecrementExample />} />

        <Route path="/use-ref" element={<UseRefHookExample />} />

      </Routes>
<Footer />
      </>
  );
  
}

export default App;
