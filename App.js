import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
    return(
        <div>
             <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element = { <Home />}/>
                    <Route path="/about" element ={<About />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App