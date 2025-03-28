import React from "react";
import SignUp from "../src/Compoonents/SignUp";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "../src/Compoonents/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
