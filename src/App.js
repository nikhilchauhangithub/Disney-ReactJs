import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/Login/Login';
import './styles/App.scss'
import './styles/Login.scss'
import './styles/Header.scss'
import Home from './components/home/Home';

const App = () => {
  return (
    <>
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
      
    </div>
    </>
  );
}

export default App