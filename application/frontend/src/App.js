/*
 * FILE: App.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the App.js for the application.
 * This component controls the routing and has the main layout of the application.
 */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import M2NavBar from './Components/M2NavBar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import M1Home from './Pages/M1Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Post from './Pages/Post';
import MyPage from './Pages/MyPage';
import Messages from './Pages/Messages';
import Members from './Pages/Members';
import Map from './Pages/Map';
import IndividualProduct from './Pages/IndividualProduct';
import { DataProvider } from './DataContext/DataContext';
import './App.css';
import ForgotPassword from './Pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <ToastContainer />
        <M2NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Message/:productId" element={<Messages />} />
          <Route path="/Product/:productId" element={<IndividualProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/M1Home" element={<M1Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/about/:username" element={<Members />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
