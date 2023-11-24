import Home from "./page/Home";

import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUP";

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
