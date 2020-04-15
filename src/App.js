import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter basename='/aoe2-lobby'>
            <div className="App">
                <Navigation/>
            </div>
        </BrowserRouter>
    );
}

export default App;
