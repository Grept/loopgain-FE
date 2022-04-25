import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";


function AddMediaForm({currentProject: {id}}) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    async function addMedia(data) {
        console.log(data)

        const formData = new FormData();
        formData.append("fileName", data.fileName);
        formData.append("file", data.file[0]);
        console.log(formData)

        try {
            const response = await axios.post(`http://localhost:8080/project/${id}/media`, formData, {
                headers: {
                    "Content-type": "application/json",
                    Authentication: `Bearer ${localStorage}`
                }
            })

            console.log(response)
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
                                type="file"
                                name="file"
                                {...register("file", {required: true})}
                            />
                        </label>
                        {errors.director && <p className="field_error_message">Please choose a file to upload.</p>}

                        <button type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddMediaForm