import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return ( 
    <>
     <Outlet/>
    </>
   );
}

export default App;