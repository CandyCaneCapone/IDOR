import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function AppLayout() {
  return (
    <main>
        <Navbar/>
        <Outlet/>
    </main>
  );
}

export default AppLayout;
