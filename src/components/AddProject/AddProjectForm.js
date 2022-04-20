import React from "react";
import "./AddProjectForm.scss"
import {useForm} from "react-hook-form";
import axios from "axios";

function AddProjectForm() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    async function addProject(data) {
        console.log(data);

        try {
            const response = await axios.post("http://localhost:8080/user/projects", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }

            )

            console.log(response);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <section className="addProject">
            <div className="addProject__container">
                <h3 className="addProject__container-title">Add New Project</h3>
                <form
                    className="addProject__form"
                    onSubmit={handleSubmit(addProject)}
                >
                    <label htmlFor="project_name">
                        <p>Project Name</p>
                        <input
                            type="text"
                            name="project_name"
                            {...register("projectName", {required: true})}
                        />
                    </label>
                    {errors.projectName && <p className="field_error_message">Please enter a project name.</p>}

                    <label htmlFor="director">
                        <p>Director</p>
                        <input
                            type="text"
                            name="director"
                            {...register("director", {required: true})}
                        />
                    </label>
                    {errors.director && <p className="field_error_message">Please enter a director name.</p>}

                    <label htmlFor="producer">
                        <p>Producer</p>
                        <input
                            type="text"
                            name="producer"
                            {...register("producer")}
                        />
                    </label>

                    <button type="submit">
                        submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default AddProjectForm;