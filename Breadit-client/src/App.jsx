import React from 'react';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Header from './components/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
