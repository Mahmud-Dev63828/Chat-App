import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "../src/Compoonents/SignIn/SignIn";
import SignUp from "./Compoonents/SignUp/SignUp";
import Sidebar from "./Compoonents/HomeComponens/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
