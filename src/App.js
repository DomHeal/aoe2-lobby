import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {HashRouter} from "react-router-dom";


function App() {
    return (
        <HashRouter basename='/'>
            <div className="App">
                <Navigation/>
            </div>
        </HashRouter>
    );
}

export default App;
