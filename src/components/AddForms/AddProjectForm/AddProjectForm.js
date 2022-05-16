import React, {useContext} from "react";
import "./AddProjectForm.scss"
import {useForm} from "react-hook-form";
import axios from "axios";
import {PopupContext} from "../../../context/PopupContext";

function AddProjectForm({toggleAddProject, getAllProjects}) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const {togglePopup} = useContext(PopupContext)

    async function addProject(data) {
        // console.log(data);

        try {
            const response = await axios.post("http://localhost:8080/user/projects", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }

            )

            getAllProjects();
            togglePopup()
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
                            className="addProject__form-field"
                            type="text"
                            name="project_name"
                            {...register("projectName", {required: true})}
                        />
                    </label>
                    {errors.projectName && <p className="field_error_message">Please enter a project name.</p>}

                    <label htmlFor="director">
                        <p>Director</p>
                        <input
                            className="addProject__form-field"
                            type="text"
                            name="director"
                            {...register("director", {required: true})}
                        />
                    </label>
                    {errors.director && <p className="field_error_message">Please enter a director name.</p>}

                    <label htmlFor="producer">
                        <p>Producer</p>
                        <input
                            className="addProject__form-field"
                            type="text"
                            name="producer"
                            {...register("producer")}
                        />
                    </label>

                    <button
                        className="addProject__form-btn"
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default AddProjectForm;