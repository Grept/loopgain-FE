import React, {useContext, useEffect, useState} from "react";
import "./MediafileCard.scss"
import {Link} from "react-router-dom";
import Popup from "../GlobalComponents/Popup/Popup";
import VerifyDelete from "../VerifyDelete/VerifyDelete";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

export default function MediafileCard({mediafile, url}) {

    const [showVerifyDelete, setShowVerifyDelete] = useState(false)
    const {user} = useContext(AuthContext)

    useEffect(() => {
        console.log("MediafileCard:")
        console.log(mediafile)
        console.log("user:")
        console.log(user)
    }, [])

    function toggleShowVerifyDelete() {
        setShowVerifyDelete(!showVerifyDelete);
    }

    async function deleteMediaFile() {
        try {
            const response = await axios.delete(`http://localhost:8080/media/${mediafile.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response);


        } catch (e) {
            console.error(e.getMessage)
        }
    }



return (
    <section className="mediafileCard__container">
        <Link exact to={url}
              className="mediafileCard__header"
        >
            {mediafile.fileName}
        </Link>

        <p className="mediafileCard__title"><strong>Project: </strong>{mediafile.parentProjectName}</p>
        <p className="mediafileCard__title"><strong>Director: </strong>{mediafile.director}</p>
        <p className="mediafileCard__title"><strong>Producer: </strong>{mediafile.producer}</p>
        <p className="mediafileCard__title"><strong>Project Host: </strong>{mediafile.projectHost}</p>

        {user.role === "PROJECT_HOST" &&
            <button onClick={toggleShowVerifyDelete}>
                Delete File
            </button>
        }

        {showVerifyDelete &&
        <Popup toggle={toggleShowVerifyDelete}>
            <VerifyDelete
                togglePopup={toggleShowVerifyDelete}
                doDelete={deleteMediaFile}
                itemName={mediafile.fileName}
            />
        </Popup>
        }
    </section>
);

}