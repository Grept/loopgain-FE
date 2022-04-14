import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                </Switch>
            </div>
        </>
    );
}

export default App;
