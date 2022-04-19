import React, {useContext} from "react";
import "./SignInPage.scss"
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

function SignInPage() {

    const {loginFunction} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm()

    async function requestLogin(data) {
        try {
            const {headers: {authorization: bearerToken}} = await axios.post('http://localhost:8080/auth', {
                    username: data.username,
                    password: data.password
            });
            const jwtToken = bearerToken.slice(7);
            console.log(jwtToken);
            loginFunction(jwtToken);
        } catch (e) {
            console.log("WE HAVE AN ERROR!!!")
            console.log(e);
        }
    }

    return(
        <main className="signInPage">
            <div className="signIn__container">
                <h3>Sign In</h3>
                <form
                    className="signIn__form"
                    onSubmit={handleSubmit(requestLogin)}
                >
                    <input
                        type="username"
                        placeholder="username"
                        {...register("username", {required: true})}
                    />
                    {errors.email && <p>Please enter a username</p>}

                    <input
                        type="password"
                        placeholder="password"
                        {...register("password", {required: true})}
                    />
                    {errors.password && <p>Please enter a password</p>}

                    <button type="submit">submit</button>
                </form>
            </div>
        </main>
    );
}

export default SignInPage;