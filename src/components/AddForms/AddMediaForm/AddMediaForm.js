import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {ProjectContext} from "../../../context/ProjectContext";
import "./AddMediaForm.scss";

function AddMediaForm({toggleShowAddMedia}) {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {getAllProjects, project: {id}} = useContext(ProjectContext);

    async function addMedia(data) {
        console.log(data)

        // Omdat we een multipart-file sturen (de video-file) gebruiken we formData om mee te geven aan axios.
        const formData = new FormData();
        formData.append("fileName", data.fileName);
        formData.append("file", data.file[0]);
        console.log(formData)

        try {
            const response = await axios.post(`http://localhost:8080/project/${id}/media`, formData, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            console.log(response)
            toggleShowAddMedia();
            getAllProjects();
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <>
            <section className="addMedia">
                <div className="addMedia__container">
                    <h3 className="addMedia__container-title">Add New Mediafile</h3>
                    <form
                        className="addMedia__form"
                        onSubmit={handleSubmit(addMedia)}
                    >
                        {/* FILENAME */}
                        <label htmlFor="media_name">
                            <p>Filename</p>
                            <input
                                className="addMedia__form-field"
                                type="text"
                                name="media_name"
                                {...register("fileName", {required: true})}
                            />
                        </label>
                        {errors.projectName && <p className="field_error_message">Please enter a file name.</p>}

                        {/* FILE */}
                        <label htmlFor="file">
                            <p>Choose File</p>
                            <input
                                className="addMedia__form-file"
                                type="file"
                                name="file"
                                {...register("file", {required: true})}
                            />
                        </label>
                        {errors.director && <p className="field_error_message">Please choose a file to upload.</p>}

                        <button
                            className="addMedia__form-btn"
                            type="submit"
                        >
                            submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddMediaForm