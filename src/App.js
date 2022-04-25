import React from "react";
import './App.scss';
import {Switch, Route, withRouter} from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import HomePage from "./pages/home/HomePage";
import UserPage from "./pages/user/UserPage";
import Footer from "./components/Footer/Footer";
import ContentViewPage from "./pages/contentview/ContentViewPage";
import SignInPage from "./pages/signIn/SignInPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProjectContextProvider from "./context/ProjectContext";


function App() {
    return (
        <>
            <div className="container__outer">
                <div className="container__inner">
                    <Navbar />
                    <ProjectContextProvider>
                        <div className="content">
                            <Switch>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route exact path="/signin">
                                    <SignInPage/>
                                </Route>
                                <Route exact path="/register">
                                    <RegisterPage/>
                                </Route>
                                <Route exact path="/user">
                                    <UserPage/>
                                </Route>
                                <Route exact path="/content/:id">
                                    <ContentViewPage />
                                </Route>
                            </Switch>
                        </div>
                    </ProjectContextProvider>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
