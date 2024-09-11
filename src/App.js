import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UrlShortner from "./components/urlShortner/UrlShortner";
import Redirector from "./components/urlShortner/redirector/Redirector";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/urlShortner" element={<UrlShortner/>}/>
                    <Route path="/:key" element={<Redirector/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
