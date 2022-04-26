import React, {useEffect} from "react";
import "./MediafileCard.scss"

export default function MediafileCard({mediafile}) {

    useEffect(() => {
        console.log("MediafileCard:")
        console.log(mediafile)
    }, [])

    return(
        <section className="mediafileCard__container">
            <button
                className="mediafileCard__header"
            >
                {mediafile.fileName}
            </button>

            <p><strong>Project: </strong>{mediafile.parentProjectName}</p>
            <p><strong>Director: </strong>{mediafile.director}</p>
            <p><strong>Producer: </strong>{mediafile.producer}</p>
            <p><strong>Project Host: </strong>{mediafile.projectHost}</p>
        </section>
    );

}