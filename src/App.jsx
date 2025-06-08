import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "../src/Compoonents/SignIn/SignIn";
import SignUp from "./Compoonents/SignUp/SignUp";
import Sidebar from "./Compoonents/HomeComponens/Sidebar";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
