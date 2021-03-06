import React from "react";
import {useForm} from "react-hook-form";
import "./RegisterPage.scss";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function RegisterPage() {
    const history = useHistory();

    // HOOKS
    const {register, handleSubmit, formState: {errors}} = useForm();

    // METHODS
    async function registerNewUser(data) {
        try {
            await axios.post("http://localhost:8080/register", data);
            history.push("/signin");
        } catch (e) {
            console.log(e);
        }
    }

    // RENDER
    return (
        <main className="register__page">
            <div className="register__container">
                <h3 className="register__container-title">Register</h3>
                <form
                    className="register__form"
                    onSubmit={handleSubmit(registerNewUser)}
                >
                    <p>Username:</p>
                    <input
                        className="register__form-field"
                        type="username"
                        placeholder="username"
                        {...register("username", {required: true})}
                    />
                    {errors.email && <p>Please enter a username</p>}

                    <p>Password:</p>
                    <input
                        className="register__form-field"
                        type="password"
                        placeholder="password"
                        {...register("password", {required: true})}
                    />
                    {errors.email && <p>Please enter a password</p>}


                    <p>Account Type</p>
                    <label htmlFor="project_host">
                        <input
                            className="register__form-radio"
                            type="radio"
                            id="project_host"
                            value="PROJECT_HOST"
                            {...register("role")}
                        />
                        Project Host
                    </label>
                    <label htmlFor="project_host">
                        <input
                            className="register__form-radio"
                            type="radio"
                            id="reviewer"
                            value="REVIEWER"
                            {...register("role")}
                        />
                        Reviewer
                    </label>

                    <button className="register__form-btn" type="submit">Submit</button>

                </form>
            </div>
        </main>
    );
}