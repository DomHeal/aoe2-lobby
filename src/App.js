import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {HashRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router basename='/aoe2-lobby'>
            <div className="App">
                <Navigation/>
            </div>
        </Router>
    );
}

export default App;
