import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import './styles/App.scss'
import './styles/Login.scss'

const App = () => {
  return (
    <>
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          </Routes>
      </Router>
      
    </div>
    </>
  );
}

export default App