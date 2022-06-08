import React from "react";
import './App.scss';
import {Switch, Route} from "react-router-dom";

import Navbar from "./components/GlobalComponents/NavBar/NavBar";
import HomePage from "./pages/home/HomePage";
import ProjectHostPage from "./pages/user/ProjectHostPage";
import Footer from "./components/GlobalComponents/Footer/Footer";
import ContentViewPage from "./pages/content/ContentViewPage";
import SignInPage from "./pages/signIn/SignInPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProjectContextProvider from "./context/ProjectContext";
import UserPage from "./pages/user/UserPage";
import AuthRoute from "./components/GlobalComponents/PrivateRoute/AuthRoute";
import ReviewRequestsPage from "./pages/user/ReviewRequestsPage";
import RolesRoute from "./components/GlobalComponents/PrivateRoute/RolesRoute";
import ContentReviewPage from "./pages/content/ContentReviewPage";
import MediaPlayerContextProvider from "./context/MediaPlayerContext";
import FeedbackContextProvider from "./context/FeedbackContext";

export default function App() {
    return (
        <>
            <div className="container__outer">
                <div className="container__inner">
                    <Navbar/>
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

                                <AuthRoute exact path="/user">
                                    <UserPage/>
                                </AuthRoute>

                                <AuthRoute exact path="/projecthost">
                                    <RolesRoute allowedRole="PROJECT_HOST">
                                        <ProjectHostPage/>
                                    </RolesRoute>
                                </AuthRoute>

                                <AuthRoute exact path="/review-requests">
                                    <RolesRoute allowedRole="REVIEWER">
                                        <ReviewRequestsPage/>
                                    </RolesRoute>
                                </AuthRoute>

                                <AuthRoute exact path="/content/:id">
                                    <RolesRoute allowedRole="PROJECT_HOST">
                                        <MediaPlayerContextProvider>
                                            <FeedbackContextProvider>
                                                <ContentViewPage/>
                                            </FeedbackContextProvider>
                                        </MediaPlayerContextProvider>
                                    </RolesRoute>
                                </AuthRoute>

                                <AuthRoute exact path="/content-review/:id">
                                    <RolesRoute allowedRole="REVIEWER">
                                        <MediaPlayerContextProvider>
                                            <ContentReviewPage/>
                                        </MediaPlayerContextProvider>
                                    </RolesRoute>
                                </AuthRoute>

                            </Switch>
                        </div>
                    </ProjectContextProvider>
                    <Footer/>
                </div>
            </div>
        </>
    );
}