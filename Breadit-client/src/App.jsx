import React from 'react';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Header from './components/Header';
import SignupFailed from './views/SignupSuccess';
import User from './stores/User';
import ProtectedRoutes from './views/ProtectedRoutes';
import WelcomeLoginPage from './views/protected/WelcomeLoginPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user_ = new User();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup user={user_} />} exact></Route>
        <Route path="/login" element={<Login user={user_} />} exact></Route>
        <Route path="/signupfailed" element={<SignupFailed />} exact></Route>
        {/* <Route path="/signed" element={<ProtectedRoutes user={user_}><WelcomeLoginPage user={user_} /></ProtectedRoutes>}></Route> */}
        <Route path="/signed" element={<WelcomeLoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
