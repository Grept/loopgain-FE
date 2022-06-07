import React, {useContext, useEffect, useState} from "react";
import "./MediafileCard.scss"
import {Link} from "react-router-dom";
import Popup from "../GlobalComponents/Popup/Popup";
import VerifyDelete from "../VerifyDelete/VerifyDelete";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

export default function MediafileCard({mediafile, url}) {

    // HOOKS
    const [showVerifyDelete, setShowVerifyDelete] = useState(false)

    const {user} = useContext(AuthContext)

    // METHODS
    function toggleShowVerifyDelete() {
        setShowVerifyDelete(!showVerifyDelete);
    }

    async function deleteMediaFile() {
        try {
            await axios.delete(`http://localhost:8080/media/${mediafile.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
        } catch (e) {
            console.error(e.getMessage)
        }
    }

    // RENDER
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
            <button className="mediafileCard__btn--delete" onClick={toggleShowVerifyDelete}>
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