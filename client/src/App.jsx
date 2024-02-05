import React from "react";
import Login from "./ui/Login";
import Signup from "./ui/Signup";
import Home from "./ui/Home";
import Notfound from "./ui/Notfound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout/>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="signin" element={<Login type="sign-in" />} />
        <Route path="signup" element={<Signup type="sign-up" />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
