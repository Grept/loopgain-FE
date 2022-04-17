import React from "react";
import "./SignInPage.scss"

export default function SignInPage() {

    return(
        <main className="signInPage">
            <div className="signIn__container">
                <h3>Sign In</h3>
                <form
                    className="signIn__form"
                    action=""
                >
                    <input type="email"/>
                    <input type="password"/>

                    <button type="button">submit</button>
                </form>
            </div>
        </main>
    );
}